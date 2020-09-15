import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  id: Scalars['Int'];
  text: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  username: Scalars['String'];
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: Maybe<Message_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Message_Max_Order_By>;
  min?: Maybe<Message_Min_Order_By>;
  stddev?: Maybe<Message_Stddev_Order_By>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Order_By>;
  sum?: Maybe<Message_Sum_Order_By>;
  var_pop?: Maybe<Message_Var_Pop_Order_By>;
  var_samp?: Maybe<Message_Var_Samp_Order_By>;
  variance?: Maybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  _not?: Maybe<Message_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Message_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export enum Message_Constraint {
  /** unique or primary key constraint */
  MessagePkey = 'message_pkey'
}

/** input type for incrementing integer column in table "message" */
export type Message_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  __typename?: 'message_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Message>;
};

/** input type for inserting object relation for remote table "message" */
export type Message_Obj_Rel_Insert_Input = {
  data: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
};

/** on conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns: Array<Message_Update_Column>;
  where?: Maybe<Message_Bool_Exp>;
};

/** ordering options when selecting data from "message" */
export type Message_Order_By = {
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "message" */
export type Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "message" */
export enum Message_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "message" */
  delete_message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "message" */
  delete_message_by_pk?: Maybe<Message>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_online" */
  delete_user_online?: Maybe<User_Online_Mutation_Response>;
  /** delete data from the table: "user_typing" */
  delete_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_online" */
  insert_user_online?: Maybe<User_Online_Mutation_Response>;
  /** insert a single row into the table: "user_online" */
  insert_user_online_one?: Maybe<User_Online>;
  /** insert data into the table: "user_typing" */
  insert_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** insert a single row into the table: "user_typing" */
  insert_user_typing_one?: Maybe<User_Typing>;
  /** update data of the table: "message" */
  update_message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<Message>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_online" */
  update_user_online?: Maybe<User_Online_Mutation_Response>;
  /** update data of the table: "user_typing" */
  update_user_typing?: Maybe<User_Typing_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_OnlineArgs = {
  where: User_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_TypingArgs = {
  where: User_Typing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OnlineArgs = {
  objects: Array<User_Online_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Online_OneArgs = {
  object: User_Online_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_TypingArgs = {
  objects: Array<User_Typing_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Typing_OneArgs = {
  object: User_Typing_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: Maybe<Message_Inc_Input>;
  _set?: Maybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc?: Maybe<Message_Inc_Input>;
  _set?: Maybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_OnlineArgs = {
  _inc?: Maybe<User_Online_Inc_Input>;
  _set?: Maybe<User_Online_Set_Input>;
  where: User_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_TypingArgs = {
  _inc?: Maybe<User_Typing_Inc_Input>;
  _set?: Maybe<User_Typing_Set_Input>;
  where: User_Typing_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table: "user_typing" */
  user_typing: Array<User_Typing>;
  /** fetch aggregated fields from the table: "user_typing" */
  user_typing_aggregate: User_Typing_Aggregate;
};


/** query root */
export type Query_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** query root */
export type Query_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** query root */
export type Query_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_OnlineArgs = {
  distinct_on?: Maybe<Array<User_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Online_Order_By>>;
  where?: Maybe<User_Online_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Online_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Online_Order_By>>;
  where?: Maybe<User_Online_Bool_Exp>;
};


/** query root */
export type Query_RootUser_TypingArgs = {
  distinct_on?: Maybe<Array<User_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Typing_Order_By>>;
  where?: Maybe<User_Typing_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Typing_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Typing_Order_By>>;
  where?: Maybe<User_Typing_Bool_Exp>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table: "user_typing" */
  user_typing: Array<User_Typing>;
  /** fetch aggregated fields from the table: "user_typing" */
  user_typing_aggregate: User_Typing_Aggregate;
};


/** subscription root */
export type Subscription_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_OnlineArgs = {
  distinct_on?: Maybe<Array<User_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Online_Order_By>>;
  where?: Maybe<User_Online_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Online_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Online_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Online_Order_By>>;
  where?: Maybe<User_Online_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_TypingArgs = {
  distinct_on?: Maybe<Array<User_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Typing_Order_By>>;
  where?: Maybe<User_Typing_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Typing_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Typing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Typing_Order_By>>;
  where?: Maybe<User_Typing_Bool_Exp>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  id: Scalars['Int'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  last_typed?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserNameKey = 'user_name_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** columns and relationships of "user_online" */
export type User_Online = {
  __typename?: 'user_online';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_online" */
export type User_Online_Aggregate = {
  __typename?: 'user_online_aggregate';
  aggregate?: Maybe<User_Online_Aggregate_Fields>;
  nodes: Array<User_Online>;
};

/** aggregate fields of "user_online" */
export type User_Online_Aggregate_Fields = {
  __typename?: 'user_online_aggregate_fields';
  avg?: Maybe<User_Online_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Online_Max_Fields>;
  min?: Maybe<User_Online_Min_Fields>;
  stddev?: Maybe<User_Online_Stddev_Fields>;
  stddev_pop?: Maybe<User_Online_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Online_Stddev_Samp_Fields>;
  sum?: Maybe<User_Online_Sum_Fields>;
  var_pop?: Maybe<User_Online_Var_Pop_Fields>;
  var_samp?: Maybe<User_Online_Var_Samp_Fields>;
  variance?: Maybe<User_Online_Variance_Fields>;
};


/** aggregate fields of "user_online" */
export type User_Online_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Online_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_online" */
export type User_Online_Aggregate_Order_By = {
  avg?: Maybe<User_Online_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Online_Max_Order_By>;
  min?: Maybe<User_Online_Min_Order_By>;
  stddev?: Maybe<User_Online_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Online_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Online_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Online_Sum_Order_By>;
  var_pop?: Maybe<User_Online_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Online_Var_Samp_Order_By>;
  variance?: Maybe<User_Online_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_online" */
export type User_Online_Arr_Rel_Insert_Input = {
  data: Array<User_Online_Insert_Input>;
};

/** aggregate avg on columns */
export type User_Online_Avg_Fields = {
  __typename?: 'user_online_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_online" */
export type User_Online_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_online". All fields are combined with a logical 'AND'. */
export type User_Online_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Online_Bool_Exp>>>;
  _not?: Maybe<User_Online_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Online_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  last_typed?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** input type for incrementing integer column in table "user_online" */
export type User_Online_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_online" */
export type User_Online_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Online_Max_Fields = {
  __typename?: 'user_online_max_fields';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_online" */
export type User_Online_Max_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Online_Min_Fields = {
  __typename?: 'user_online_min_fields';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_online" */
export type User_Online_Min_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_online" */
export type User_Online_Mutation_Response = {
  __typename?: 'user_online_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Online>;
};

/** input type for inserting object relation for remote table "user_online" */
export type User_Online_Obj_Rel_Insert_Input = {
  data: User_Online_Insert_Input;
};

/** ordering options when selecting data from "user_online" */
export type User_Online_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** select columns of table "user_online" */
export enum User_Online_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user_online" */
export type User_Online_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Online_Stddev_Fields = {
  __typename?: 'user_online_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_online" */
export type User_Online_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Online_Stddev_Pop_Fields = {
  __typename?: 'user_online_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_online" */
export type User_Online_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Online_Stddev_Samp_Fields = {
  __typename?: 'user_online_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_online" */
export type User_Online_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Online_Sum_Fields = {
  __typename?: 'user_online_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_online" */
export type User_Online_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type User_Online_Var_Pop_Fields = {
  __typename?: 'user_online_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_online" */
export type User_Online_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Online_Var_Samp_Fields = {
  __typename?: 'user_online_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_online" */
export type User_Online_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Online_Variance_Fields = {
  __typename?: 'user_online_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_online" */
export type User_Online_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "user_typing" */
export type User_Typing = {
  __typename?: 'user_typing';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_typing" */
export type User_Typing_Aggregate = {
  __typename?: 'user_typing_aggregate';
  aggregate?: Maybe<User_Typing_Aggregate_Fields>;
  nodes: Array<User_Typing>;
};

/** aggregate fields of "user_typing" */
export type User_Typing_Aggregate_Fields = {
  __typename?: 'user_typing_aggregate_fields';
  avg?: Maybe<User_Typing_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Typing_Max_Fields>;
  min?: Maybe<User_Typing_Min_Fields>;
  stddev?: Maybe<User_Typing_Stddev_Fields>;
  stddev_pop?: Maybe<User_Typing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Typing_Stddev_Samp_Fields>;
  sum?: Maybe<User_Typing_Sum_Fields>;
  var_pop?: Maybe<User_Typing_Var_Pop_Fields>;
  var_samp?: Maybe<User_Typing_Var_Samp_Fields>;
  variance?: Maybe<User_Typing_Variance_Fields>;
};


/** aggregate fields of "user_typing" */
export type User_Typing_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Typing_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_typing" */
export type User_Typing_Aggregate_Order_By = {
  avg?: Maybe<User_Typing_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Typing_Max_Order_By>;
  min?: Maybe<User_Typing_Min_Order_By>;
  stddev?: Maybe<User_Typing_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Typing_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Typing_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Typing_Sum_Order_By>;
  var_pop?: Maybe<User_Typing_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Typing_Var_Samp_Order_By>;
  variance?: Maybe<User_Typing_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_typing" */
export type User_Typing_Arr_Rel_Insert_Input = {
  data: Array<User_Typing_Insert_Input>;
};

/** aggregate avg on columns */
export type User_Typing_Avg_Fields = {
  __typename?: 'user_typing_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_typing" */
export type User_Typing_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_typing". All fields are combined with a logical 'AND'. */
export type User_Typing_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Typing_Bool_Exp>>>;
  _not?: Maybe<User_Typing_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Typing_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  last_typed?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** input type for incrementing integer column in table "user_typing" */
export type User_Typing_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_typing" */
export type User_Typing_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Typing_Max_Fields = {
  __typename?: 'user_typing_max_fields';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_typing" */
export type User_Typing_Max_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Typing_Min_Fields = {
  __typename?: 'user_typing_min_fields';
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_typing" */
export type User_Typing_Min_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_typing" */
export type User_Typing_Mutation_Response = {
  __typename?: 'user_typing_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Typing>;
};

/** input type for inserting object relation for remote table "user_typing" */
export type User_Typing_Obj_Rel_Insert_Input = {
  data: User_Typing_Insert_Input;
};

/** ordering options when selecting data from "user_typing" */
export type User_Typing_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  last_typed?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** select columns of table "user_typing" */
export enum User_Typing_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user_typing" */
export type User_Typing_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  last_typed?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Typing_Stddev_Fields = {
  __typename?: 'user_typing_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_typing" */
export type User_Typing_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Typing_Stddev_Pop_Fields = {
  __typename?: 'user_typing_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_typing" */
export type User_Typing_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Typing_Stddev_Samp_Fields = {
  __typename?: 'user_typing_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_typing" */
export type User_Typing_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Typing_Sum_Fields = {
  __typename?: 'user_typing_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_typing" */
export type User_Typing_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type User_Typing_Var_Pop_Fields = {
  __typename?: 'user_typing_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_typing" */
export type User_Typing_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Typing_Var_Samp_Fields = {
  __typename?: 'user_typing_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_typing" */
export type User_Typing_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Typing_Variance_Fields = {
  __typename?: 'user_typing_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_typing" */
export type User_Typing_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type InsertUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type InsertUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_user?: Maybe<(
    { __typename?: 'user_mutation_response' }
    & { returning: Array<(
      { __typename?: 'user' }
      & Pick<User, 'id' | 'username'>
    )> }
  )> }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'username'>
  )> }
);


export const InsertUserDocument = gql`
    mutation InsertUser($username: String!) {
  insert_user(objects: [{username: $username}]) {
    returning {
      id
      username
    }
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, baseOptions);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const UserDocument = gql`
    query User {
  user {
    id
    username
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;