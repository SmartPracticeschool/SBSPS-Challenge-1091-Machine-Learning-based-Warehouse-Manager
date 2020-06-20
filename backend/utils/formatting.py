import pandas as pd


def format_data(data):
    data_dict = dict()
    for key in data:
        data_dict[key] = [data[key]]
    return data_dict


def prepare_dataframe(df):
    # Data Preparation encoding the categorical values
    category_dict = {'Beverages': 1, 'Rice Bowl': 2, 'Starters': 3, 'Pasta': 4, 'Sandwich': 5, 'Biryani': 6,
                     'Extras': 7, 'Pizza': 8, 'Seafood': 9, 'Other Snacks': 10, 'Desert': 11, 'Salad': 12, 'Fish': 13, 'Soup': 14}
    cuisine_dict = {'Thai': 1, 'Indian': 2, 'Italian': 3, 'Continental': 4}
    center_type_dict = {'TYPE_C': 1, 'TYPE_B': 2, 'TYPE_A': 3}

    df["category"] = df["category"].apply(lambda x: category_dict[x])

    df["cuisine"] = df["cuisine"].apply(lambda x: cuisine_dict[x])

    df["center_type"] = df["center_type"].apply(
        lambda x: center_type_dict[x])

    return df


def get_complete_data(data):
    # Merging data given data with extra information
    center_id = data['center_id']
    meal_id = data['meal_id']
    center_df = pd.read_csv("./backend/datasets/fulfilment_center_info.csv")
    meal_df = pd.read_csv("./backend/datasets/meal_info.csv")

    data_dict = format_data(data)

    input_df = pd.DataFrame(data_dict)

    meal_row = meal_df[meal_df['meal_id'] == meal_id]

    center_row = center_df[center_df['center_id'] == center_id]

    final_df = input_df.merge(meal_row, on='meal_id')

    final_df = final_df.merge(center_row, on='center_id')

    final_df = prepare_dataframe(final_df)

    final_data = final_df.to_dict()

    return final_data


def get_scoring_payload(data):

    final_data_dict = get_complete_data(data)

    fields = list(final_data_dict.keys())
    values = [str(x[0]) for x in final_data_dict.values()]

    scoring_payload = {"fields": fields, "values": [values]}

    return scoring_payload
