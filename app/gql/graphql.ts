/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any };
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any };
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any };
  /** A date wihout time information */
  Date: { input: any; output: any };
  /** A date and time */
  Datetime: { input: any; output: any };
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any };
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any };
  /** A time without date information */
  Time: { input: any; output: any };
  /** A universally unique identifier */
  UUID: { input: any; output: any };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars["BigFloat"]["input"]>;
  gt?: InputMaybe<Scalars["BigFloat"]["input"]>;
  gte?: InputMaybe<Scalars["BigFloat"]["input"]>;
  in?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigFloat"]["input"]>;
  lte?: InputMaybe<Scalars["BigFloat"]["input"]>;
  neq?: InputMaybe<Scalars["BigFloat"]["input"]>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]["input"]>;
  gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  neq?: InputMaybe<Scalars["BigInt"]["input"]>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  in?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  neq?: InputMaybe<Scalars["Date"]["input"]>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Date"]["input"]>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]["input"]>;
  gt?: InputMaybe<Scalars["Datetime"]["input"]>;
  gte?: InputMaybe<Scalars["Datetime"]["input"]>;
  in?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Datetime"]["input"]>;
  lte?: InputMaybe<Scalars["Datetime"]["input"]>;
  neq?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
};

export enum FilterIs {
  NotNull = "NOT_NULL",
  Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  neq?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  neq?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the `black_book_runner_subscriptions` collection */
  deleteFromblack_book_runner_subscriptionsCollection: Black_Book_Runner_SubscriptionsDeleteResponse;
  /** Deletes zero or more records from the `competitors` collection */
  deleteFromcompetitorsCollection: CompetitorsDeleteResponse;
  /** Deletes zero or more records from the `dividends` collection */
  deleteFromdividendsCollection: DividendsDeleteResponse;
  /** Deletes zero or more records from the `followers` collection */
  deleteFromfollowersCollection: FollowersDeleteResponse;
  /** Deletes zero or more records from the `global_quick_fire_buttons` collection */
  deleteFromglobal_quick_fire_buttonsCollection: Global_Quick_Fire_ButtonsDeleteResponse;
  /** Deletes zero or more records from the `horses` collection */
  deleteFromhorsesCollection: HorsesDeleteResponse;
  /** Deletes zero or more records from the `jockeys` collection */
  deleteFromjockeysCollection: JockeysDeleteResponse;
  /** Deletes zero or more records from the `meetings` collection */
  deleteFrommeetingsCollection: MeetingsDeleteResponse;
  /** Deletes zero or more records from the `odds` collection */
  deleteFromoddsCollection: OddsDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Deletes zero or more records from the `race_quick_fire_buttons` collection */
  deleteFromrace_quick_fire_buttonsCollection: Race_Quick_Fire_ButtonsDeleteResponse;
  /** Deletes zero or more records from the `races` collection */
  deleteFromracesCollection: RacesDeleteResponse;
  /** Deletes zero or more records from the `scratches` collection */
  deleteFromscratchesCollection: ScratchesDeleteResponse;
  /** Deletes zero or more records from the `social_post` collection */
  deleteFromsocial_postCollection: Social_PostDeleteResponse;
  /** Deletes zero or more records from the `tips` collection */
  deleteFromtipsCollection: TipsDeleteResponse;
  /** Deletes zero or more records from the `tracks` collection */
  deleteFromtracksCollection: TracksDeleteResponse;
  /** Deletes zero or more records from the `trainers` collection */
  deleteFromtrainersCollection: TrainersDeleteResponse;
  /** Deletes zero or more records from the `user_race_comments` collection */
  deleteFromuser_race_commentsCollection: User_Race_CommentsDeleteResponse;
  /** Deletes zero or more records from the `user_vc` collection */
  deleteFromuser_vcCollection: User_VcDeleteResponse;
  /** Deletes zero or more records from the `votable_global_quick_fire_buttons` collection */
  deleteFromvotable_global_quick_fire_buttonsCollection: Votable_Global_Quick_Fire_ButtonsDeleteResponse;
  /** Deletes zero or more records from the `votable_quick_fire_buttons` collection */
  deleteFromvotable_quick_fire_buttonsCollection: Votable_Quick_Fire_ButtonsDeleteResponse;
  get_last_3_races_for_black_book_horse: Maybe<
    Array<Maybe<Scalars["JSON"]["output"]>>
  >;
  get_race_grade: Maybe<Scalars["Int"]["output"]>;
  get_to_pressed_quick_fire_buttons: Maybe<
    Array<Maybe<Scalars["JSON"]["output"]>>
  >;
  /** Adds one or more `black_book_runner_subscriptions` records to the collection */
  insertIntoblack_book_runner_subscriptionsCollection: Maybe<Black_Book_Runner_SubscriptionsInsertResponse>;
  /** Adds one or more `competitors` records to the collection */
  insertIntocompetitorsCollection: Maybe<CompetitorsInsertResponse>;
  /** Adds one or more `dividends` records to the collection */
  insertIntodividendsCollection: Maybe<DividendsInsertResponse>;
  /** Adds one or more `followers` records to the collection */
  insertIntofollowersCollection: Maybe<FollowersInsertResponse>;
  /** Adds one or more `global_quick_fire_buttons` records to the collection */
  insertIntoglobal_quick_fire_buttonsCollection: Maybe<Global_Quick_Fire_ButtonsInsertResponse>;
  /** Adds one or more `horses` records to the collection */
  insertIntohorsesCollection: Maybe<HorsesInsertResponse>;
  /** Adds one or more `jockeys` records to the collection */
  insertIntojockeysCollection: Maybe<JockeysInsertResponse>;
  /** Adds one or more `meetings` records to the collection */
  insertIntomeetingsCollection: Maybe<MeetingsInsertResponse>;
  /** Adds one or more `odds` records to the collection */
  insertIntooddsCollection: Maybe<OddsInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `race_quick_fire_buttons` records to the collection */
  insertIntorace_quick_fire_buttonsCollection: Maybe<Race_Quick_Fire_ButtonsInsertResponse>;
  /** Adds one or more `races` records to the collection */
  insertIntoracesCollection: Maybe<RacesInsertResponse>;
  /** Adds one or more `scratches` records to the collection */
  insertIntoscratchesCollection: Maybe<ScratchesInsertResponse>;
  /** Adds one or more `social_post` records to the collection */
  insertIntosocial_postCollection: Maybe<Social_PostInsertResponse>;
  /** Adds one or more `tips` records to the collection */
  insertIntotipsCollection: Maybe<TipsInsertResponse>;
  /** Adds one or more `tracks` records to the collection */
  insertIntotracksCollection: Maybe<TracksInsertResponse>;
  /** Adds one or more `trainers` records to the collection */
  insertIntotrainersCollection: Maybe<TrainersInsertResponse>;
  /** Adds one or more `user_race_comments` records to the collection */
  insertIntouser_race_commentsCollection: Maybe<User_Race_CommentsInsertResponse>;
  /** Adds one or more `user_vc` records to the collection */
  insertIntouser_vcCollection: Maybe<User_VcInsertResponse>;
  /** Adds one or more `votable_global_quick_fire_buttons` records to the collection */
  insertIntovotable_global_quick_fire_buttonsCollection: Maybe<Votable_Global_Quick_Fire_ButtonsInsertResponse>;
  /** Adds one or more `votable_quick_fire_buttons` records to the collection */
  insertIntovotable_quick_fire_buttonsCollection: Maybe<Votable_Quick_Fire_ButtonsInsertResponse>;
  /** Updates zero or more records in the `black_book_runner_subscriptions` collection */
  updateblack_book_runner_subscriptionsCollection: Black_Book_Runner_SubscriptionsUpdateResponse;
  /** Updates zero or more records in the `competitors` collection */
  updatecompetitorsCollection: CompetitorsUpdateResponse;
  /** Updates zero or more records in the `dividends` collection */
  updatedividendsCollection: DividendsUpdateResponse;
  /** Updates zero or more records in the `followers` collection */
  updatefollowersCollection: FollowersUpdateResponse;
  /** Updates zero or more records in the `global_quick_fire_buttons` collection */
  updateglobal_quick_fire_buttonsCollection: Global_Quick_Fire_ButtonsUpdateResponse;
  /** Updates zero or more records in the `horses` collection */
  updatehorsesCollection: HorsesUpdateResponse;
  /** Updates zero or more records in the `jockeys` collection */
  updatejockeysCollection: JockeysUpdateResponse;
  /** Updates zero or more records in the `meetings` collection */
  updatemeetingsCollection: MeetingsUpdateResponse;
  /** Updates zero or more records in the `odds` collection */
  updateoddsCollection: OddsUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: ProfilesUpdateResponse;
  /** Updates zero or more records in the `race_quick_fire_buttons` collection */
  updaterace_quick_fire_buttonsCollection: Race_Quick_Fire_ButtonsUpdateResponse;
  /** Updates zero or more records in the `races` collection */
  updateracesCollection: RacesUpdateResponse;
  /** Updates zero or more records in the `scratches` collection */
  updatescratchesCollection: ScratchesUpdateResponse;
  /** Updates zero or more records in the `social_post` collection */
  updatesocial_postCollection: Social_PostUpdateResponse;
  /** Updates zero or more records in the `tips` collection */
  updatetipsCollection: TipsUpdateResponse;
  /** Updates zero or more records in the `tracks` collection */
  updatetracksCollection: TracksUpdateResponse;
  /** Updates zero or more records in the `trainers` collection */
  updatetrainersCollection: TrainersUpdateResponse;
  /** Updates zero or more records in the `user_race_comments` collection */
  updateuser_race_commentsCollection: User_Race_CommentsUpdateResponse;
  /** Updates zero or more records in the `user_vc` collection */
  updateuser_vcCollection: User_VcUpdateResponse;
  /** Updates zero or more records in the `votable_global_quick_fire_buttons` collection */
  updatevotable_global_quick_fire_buttonsCollection: Votable_Global_Quick_Fire_ButtonsUpdateResponse;
  /** Updates zero or more records in the `votable_quick_fire_buttons` collection */
  updatevotable_quick_fire_buttonsCollection: Votable_Quick_Fire_ButtonsUpdateResponse;
  upsert_comment_with_quick_fire_buttons: Maybe<Scalars["Opaque"]["output"]>;
  upsert_global_comment_with_quick_fire_buttons: Maybe<
    Scalars["Opaque"]["output"]
  >;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromblack_Book_Runner_SubscriptionsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Black_Book_Runner_SubscriptionsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcompetitorsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<CompetitorsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromdividendsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<DividendsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromfollowersCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<FollowersFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromglobal_Quick_Fire_ButtonsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Global_Quick_Fire_ButtonsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromhorsesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<HorsesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromjockeysCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<JockeysFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFrommeetingsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<MeetingsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromoddsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<OddsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ProfilesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrace_Quick_Fire_ButtonsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Race_Quick_Fire_ButtonsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromracesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<RacesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromscratchesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ScratchesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromsocial_PostCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Social_PostFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromtipsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<TipsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromtracksCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<TracksFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromtrainersCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<TrainersFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuser_Race_CommentsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<User_Race_CommentsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuser_VcCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<User_VcFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromvotable_Global_Quick_Fire_ButtonsCollectionArgs =
  {
    atMost?: Scalars["Int"]["input"];
    filter?: InputMaybe<Votable_Global_Quick_Fire_ButtonsFilter>;
  };

/** The root type for creating and mutating data */
export type MutationDeleteFromvotable_Quick_Fire_ButtonsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Votable_Quick_Fire_ButtonsFilter>;
};

/** The root type for creating and mutating data */
export type MutationGet_Last_3_Races_For_Black_Book_HorseArgs = {
  passed_horse_id: Scalars["BigInt"]["input"];
  passed_user_id: Scalars["UUID"]["input"];
};

/** The root type for creating and mutating data */
export type MutationGet_Race_GradeArgs = {
  raceclass: Scalars["String"]["input"];
};

/** The root type for creating and mutating data */
export type MutationGet_To_Pressed_Quick_Fire_ButtonsArgs = {
  passed_horse_id: Scalars["BigInt"]["input"];
  passed_race_id: Scalars["BigInt"]["input"];
};

/** The root type for creating and mutating data */
export type MutationInsertIntoblack_Book_Runner_SubscriptionsCollectionArgs = {
  objects: Array<Black_Book_Runner_SubscriptionsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocompetitorsCollectionArgs = {
  objects: Array<CompetitorsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntodividendsCollectionArgs = {
  objects: Array<DividendsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntofollowersCollectionArgs = {
  objects: Array<FollowersInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoglobal_Quick_Fire_ButtonsCollectionArgs = {
  objects: Array<Global_Quick_Fire_ButtonsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntohorsesCollectionArgs = {
  objects: Array<HorsesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntojockeysCollectionArgs = {
  objects: Array<JockeysInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntomeetingsCollectionArgs = {
  objects: Array<MeetingsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntooddsCollectionArgs = {
  objects: Array<OddsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorace_Quick_Fire_ButtonsCollectionArgs = {
  objects: Array<Race_Quick_Fire_ButtonsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoracesCollectionArgs = {
  objects: Array<RacesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoscratchesCollectionArgs = {
  objects: Array<ScratchesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntosocial_PostCollectionArgs = {
  objects: Array<Social_PostInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntotipsCollectionArgs = {
  objects: Array<TipsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntotracksCollectionArgs = {
  objects: Array<TracksInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntotrainersCollectionArgs = {
  objects: Array<TrainersInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntouser_Race_CommentsCollectionArgs = {
  objects: Array<User_Race_CommentsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntouser_VcCollectionArgs = {
  objects: Array<User_VcInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntovotable_Global_Quick_Fire_ButtonsCollectionArgs =
  {
    objects: Array<Votable_Global_Quick_Fire_ButtonsInsertInput>;
  };

/** The root type for creating and mutating data */
export type MutationInsertIntovotable_Quick_Fire_ButtonsCollectionArgs = {
  objects: Array<Votable_Quick_Fire_ButtonsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateblack_Book_Runner_SubscriptionsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Black_Book_Runner_SubscriptionsFilter>;
  set: Black_Book_Runner_SubscriptionsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecompetitorsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<CompetitorsFilter>;
  set: CompetitorsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatedividendsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<DividendsFilter>;
  set: DividendsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatefollowersCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<FollowersFilter>;
  set: FollowersUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateglobal_Quick_Fire_ButtonsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Global_Quick_Fire_ButtonsFilter>;
  set: Global_Quick_Fire_ButtonsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatehorsesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<HorsesFilter>;
  set: HorsesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatejockeysCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<JockeysFilter>;
  set: JockeysUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatemeetingsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<MeetingsFilter>;
  set: MeetingsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateoddsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<OddsFilter>;
  set: OddsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdaterace_Quick_Fire_ButtonsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Race_Quick_Fire_ButtonsFilter>;
  set: Race_Quick_Fire_ButtonsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateracesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<RacesFilter>;
  set: RacesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatescratchesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ScratchesFilter>;
  set: ScratchesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatesocial_PostCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Social_PostFilter>;
  set: Social_PostUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatetipsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<TipsFilter>;
  set: TipsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatetracksCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<TracksFilter>;
  set: TracksUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatetrainersCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<TrainersFilter>;
  set: TrainersUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateuser_Race_CommentsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<User_Race_CommentsFilter>;
  set: User_Race_CommentsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateuser_VcCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<User_VcFilter>;
  set: User_VcUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatevotable_Global_Quick_Fire_ButtonsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Votable_Global_Quick_Fire_ButtonsFilter>;
  set: Votable_Global_Quick_Fire_ButtonsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatevotable_Quick_Fire_ButtonsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Votable_Quick_Fire_ButtonsFilter>;
  set: Votable_Quick_Fire_ButtonsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpsert_Comment_With_Quick_Fire_ButtonsArgs = {
  comment_text: Scalars["String"]["input"];
  passed_comment_id: Scalars["BigInt"]["input"];
  passed_horse_id: Scalars["BigInt"]["input"];
  passed_quickfire_buttons: Array<InputMaybe<Scalars["BigInt"]["input"]>>;
  passed_race_id: Scalars["BigInt"]["input"];
};

/** The root type for creating and mutating data */
export type MutationUpsert_Global_Comment_With_Quick_Fire_ButtonsArgs = {
  comment_text: Scalars["String"]["input"];
  passed_quick_fire_buttons: Array<InputMaybe<Scalars["BigInt"]["input"]>>;
  passed_subscription_id: Scalars["BigInt"]["input"];
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars["ID"]["output"];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars["Opaque"]["input"]>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = "AscNullsFirst",
  /** Ascending order, nulls last */
  AscNullsLast = "AscNullsLast",
  /** Descending order, nulls first */
  DescNullsFirst = "DescNullsFirst",
  /** Descending order, nulls last */
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor: Maybe<Scalars["String"]["output"]>;
};

/** The root type for querying data */
export type Query = {
  __typename?: "Query";
  /** A pagable collection of type `black_book_runner_subscriptions` */
  black_book_runner_subscriptionsCollection: Maybe<Black_Book_Runner_SubscriptionsConnection>;
  /** A pagable collection of type `competitors` */
  competitorsCollection: Maybe<CompetitorsConnection>;
  /** A pagable collection of type `dividends` */
  dividendsCollection: Maybe<DividendsConnection>;
  /** A pagable collection of type `followers` */
  followersCollection: Maybe<FollowersConnection>;
  /** A pagable collection of type `global_quick_fire_buttons` */
  global_quick_fire_buttonsCollection: Maybe<Global_Quick_Fire_ButtonsConnection>;
  /** A pagable collection of type `horses` */
  horsesCollection: Maybe<HorsesConnection>;
  /** A pagable collection of type `jockeys` */
  jockeysCollection: Maybe<JockeysConnection>;
  /** A pagable collection of type `meetings` */
  meetingsCollection: Maybe<MeetingsConnection>;
  /** Retrieve a record by its `ID` */
  node: Maybe<Node>;
  /** A pagable collection of type `odds` */
  oddsCollection: Maybe<OddsConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection: Maybe<ProfilesConnection>;
  /** A pagable collection of type `race_quick_fire_buttons` */
  race_quick_fire_buttonsCollection: Maybe<Race_Quick_Fire_ButtonsConnection>;
  /** A pagable collection of type `races` */
  racesCollection: Maybe<RacesConnection>;
  /** A pagable collection of type `scratches` */
  scratchesCollection: Maybe<ScratchesConnection>;
  /** A pagable collection of type `social_post` */
  social_postCollection: Maybe<Social_PostConnection>;
  /** A pagable collection of type `tips` */
  tipsCollection: Maybe<TipsConnection>;
  /** A pagable collection of type `tracks` */
  tracksCollection: Maybe<TracksConnection>;
  /** A pagable collection of type `trainers` */
  trainersCollection: Maybe<TrainersConnection>;
  /** A pagable collection of type `user_race_comments` */
  user_race_commentsCollection: Maybe<User_Race_CommentsConnection>;
  /** A pagable collection of type `user_vc` */
  user_vcCollection: Maybe<User_VcConnection>;
  /** A pagable collection of type `votable_global_quick_fire_buttons` */
  votable_global_quick_fire_buttonsCollection: Maybe<Votable_Global_Quick_Fire_ButtonsConnection>;
  /** A pagable collection of type `votable_quick_fire_buttons` */
  votable_quick_fire_buttonsCollection: Maybe<Votable_Quick_Fire_ButtonsConnection>;
};

/** The root type for querying data */
export type QueryBlack_Book_Runner_SubscriptionsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Black_Book_Runner_SubscriptionsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Black_Book_Runner_SubscriptionsOrderBy>>;
};

/** The root type for querying data */
export type QueryCompetitorsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<CompetitorsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CompetitorsOrderBy>>;
};

/** The root type for querying data */
export type QueryDividendsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<DividendsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<DividendsOrderBy>>;
};

/** The root type for querying data */
export type QueryFollowersCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<FollowersFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FollowersOrderBy>>;
};

/** The root type for querying data */
export type QueryGlobal_Quick_Fire_ButtonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Global_Quick_Fire_ButtonsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Global_Quick_Fire_ButtonsOrderBy>>;
};

/** The root type for querying data */
export type QueryHorsesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<HorsesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<HorsesOrderBy>>;
};

/** The root type for querying data */
export type QueryJockeysCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<JockeysFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<JockeysOrderBy>>;
};

/** The root type for querying data */
export type QueryMeetingsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<MeetingsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root type for querying data */
export type QueryOddsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<OddsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OddsOrderBy>>;
};

/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};

/** The root type for querying data */
export type QueryRace_Quick_Fire_ButtonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Race_Quick_Fire_ButtonsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Race_Quick_Fire_ButtonsOrderBy>>;
};

/** The root type for querying data */
export type QueryRacesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<RacesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RacesOrderBy>>;
};

/** The root type for querying data */
export type QueryScratchesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ScratchesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ScratchesOrderBy>>;
};

/** The root type for querying data */
export type QuerySocial_PostCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Social_PostFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Social_PostOrderBy>>;
};

/** The root type for querying data */
export type QueryTipsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<TipsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TipsOrderBy>>;
};

/** The root type for querying data */
export type QueryTracksCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<TracksFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TracksOrderBy>>;
};

/** The root type for querying data */
export type QueryTrainersCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<TrainersFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TrainersOrderBy>>;
};

/** The root type for querying data */
export type QueryUser_Race_CommentsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<User_Race_CommentsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<User_Race_CommentsOrderBy>>;
};

/** The root type for querying data */
export type QueryUser_VcCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<User_VcFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<User_VcOrderBy>>;
};

/** The root type for querying data */
export type QueryVotable_Global_Quick_Fire_ButtonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Votable_Global_Quick_Fire_ButtonsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Votable_Global_Quick_Fire_ButtonsOrderBy>>;
};

/** The root type for querying data */
export type QueryVotable_Quick_Fire_ButtonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Votable_Quick_Fire_ButtonsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Votable_Quick_Fire_ButtonsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  ilike?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  iregex?: InputMaybe<Scalars["String"]["input"]>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  neq?: InputMaybe<Scalars["String"]["input"]>;
  regex?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["String"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars["Time"]["input"]>;
  gt?: InputMaybe<Scalars["Time"]["input"]>;
  gte?: InputMaybe<Scalars["Time"]["input"]>;
  in?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Time"]["input"]>;
  lte?: InputMaybe<Scalars["Time"]["input"]>;
  neq?: InputMaybe<Scalars["Time"]["input"]>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Time"]["input"]>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]["input"]>;
  in?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars["UUID"]["input"]>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
};

export enum Bet_Type {
  Exacta = "exacta",
  Quinella = "quinella",
  Top_4 = "top_4",
  Trifectta = "trifectta",
}

/** Boolean expression comparing fields on type "bet_type" */
export type Bet_TypeFilter = {
  eq?: InputMaybe<Bet_Type>;
  in?: InputMaybe<Array<Bet_Type>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Bet_Type>;
};

export type Black_Book_Runner_Subscriptions = Node & {
  __typename?: "black_book_runner_subscriptions";
  comment: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  horse_id: Maybe<Scalars["BigInt"]["output"]>;
  horses: Maybe<Horses>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  user_id: Maybe<Scalars["UUID"]["output"]>;
  votable_global_quick_fire_buttonsCollection: Maybe<Votable_Global_Quick_Fire_ButtonsConnection>;
};

export type Black_Book_Runner_SubscriptionsVotable_Global_Quick_Fire_ButtonsCollectionArgs =
  {
    after?: InputMaybe<Scalars["Cursor"]["input"]>;
    before?: InputMaybe<Scalars["Cursor"]["input"]>;
    filter?: InputMaybe<Votable_Global_Quick_Fire_ButtonsFilter>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<Array<Votable_Global_Quick_Fire_ButtonsOrderBy>>;
  };

export type Black_Book_Runner_SubscriptionsConnection = {
  __typename?: "black_book_runner_subscriptionsConnection";
  edges: Array<Black_Book_Runner_SubscriptionsEdge>;
  pageInfo: PageInfo;
};

export type Black_Book_Runner_SubscriptionsDeleteResponse = {
  __typename?: "black_book_runner_subscriptionsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Black_Book_Runner_Subscriptions>;
};

export type Black_Book_Runner_SubscriptionsEdge = {
  __typename?: "black_book_runner_subscriptionsEdge";
  cursor: Scalars["String"]["output"];
  node: Black_Book_Runner_Subscriptions;
};

export type Black_Book_Runner_SubscriptionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Black_Book_Runner_SubscriptionsFilter>>;
  comment?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  horse_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Black_Book_Runner_SubscriptionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Black_Book_Runner_SubscriptionsFilter>>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Black_Book_Runner_SubscriptionsInsertInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Black_Book_Runner_SubscriptionsInsertResponse = {
  __typename?: "black_book_runner_subscriptionsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Black_Book_Runner_Subscriptions>;
};

export type Black_Book_Runner_SubscriptionsOrderBy = {
  comment?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  horse_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Black_Book_Runner_SubscriptionsUpdateInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Black_Book_Runner_SubscriptionsUpdateResponse = {
  __typename?: "black_book_runner_subscriptionsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Black_Book_Runner_Subscriptions>;
};

export type Competitors = Node & {
  __typename?: "competitors";
  barrier: Maybe<Scalars["Int"]["output"]>;
  competitor_number: Maybe<Scalars["Int"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  elapsed_time_ms: Maybe<Scalars["BigInt"]["output"]>;
  failed_to_finish: Maybe<Scalars["Boolean"]["output"]>;
  failed_to_finish_reason: Maybe<Scalars["String"]["output"]>;
  final_position: Maybe<Scalars["Int"]["output"]>;
  horse_id: Maybe<Scalars["BigInt"]["output"]>;
  horses: Maybe<Horses>;
  id: Scalars["BigInt"]["output"];
  jockey_id: Maybe<Scalars["BigInt"]["output"]>;
  jockeys: Maybe<Jockeys>;
  late_scratch_time: Maybe<Scalars["Datetime"]["output"]>;
  margin: Maybe<Scalars["Float"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  odds: Maybe<Scalars["JSON"]["output"]>;
  race_id: Maybe<Scalars["BigInt"]["output"]>;
  races: Maybe<Races>;
  scratching_type: Maybe<Scalars["String"]["output"]>;
  silks: Maybe<Scalars["JSON"]["output"]>;
  steward_comment: Maybe<Scalars["String"]["output"]>;
  trainer_id: Maybe<Scalars["BigInt"]["output"]>;
  trainers: Maybe<Trainers>;
  weight_total: Maybe<Scalars["Float"]["output"]>;
};

export type CompetitorsConnection = {
  __typename?: "competitorsConnection";
  edges: Array<CompetitorsEdge>;
  pageInfo: PageInfo;
};

export type CompetitorsDeleteResponse = {
  __typename?: "competitorsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Competitors>;
};

export type CompetitorsEdge = {
  __typename?: "competitorsEdge";
  cursor: Scalars["String"]["output"];
  node: Competitors;
};

export type CompetitorsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CompetitorsFilter>>;
  barrier?: InputMaybe<IntFilter>;
  competitor_number?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  elapsed_time_ms?: InputMaybe<BigIntFilter>;
  failed_to_finish?: InputMaybe<BooleanFilter>;
  failed_to_finish_reason?: InputMaybe<StringFilter>;
  final_position?: InputMaybe<IntFilter>;
  horse_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  jockey_id?: InputMaybe<BigIntFilter>;
  late_scratch_time?: InputMaybe<DatetimeFilter>;
  margin?: InputMaybe<FloatFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CompetitorsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CompetitorsFilter>>;
  race_id?: InputMaybe<BigIntFilter>;
  scratching_type?: InputMaybe<StringFilter>;
  steward_comment?: InputMaybe<StringFilter>;
  trainer_id?: InputMaybe<BigIntFilter>;
  weight_total?: InputMaybe<FloatFilter>;
};

export type CompetitorsInsertInput = {
  barrier?: InputMaybe<Scalars["Int"]["input"]>;
  competitor_number?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  elapsed_time_ms?: InputMaybe<Scalars["BigInt"]["input"]>;
  failed_to_finish?: InputMaybe<Scalars["Boolean"]["input"]>;
  failed_to_finish_reason?: InputMaybe<Scalars["String"]["input"]>;
  final_position?: InputMaybe<Scalars["Int"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  jockey_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  late_scratch_time?: InputMaybe<Scalars["Datetime"]["input"]>;
  margin?: InputMaybe<Scalars["Float"]["input"]>;
  odds?: InputMaybe<Scalars["JSON"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  scratching_type?: InputMaybe<Scalars["String"]["input"]>;
  silks?: InputMaybe<Scalars["JSON"]["input"]>;
  steward_comment?: InputMaybe<Scalars["String"]["input"]>;
  trainer_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  weight_total?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CompetitorsInsertResponse = {
  __typename?: "competitorsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Competitors>;
};

export type CompetitorsOrderBy = {
  barrier?: InputMaybe<OrderByDirection>;
  competitor_number?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  elapsed_time_ms?: InputMaybe<OrderByDirection>;
  failed_to_finish?: InputMaybe<OrderByDirection>;
  failed_to_finish_reason?: InputMaybe<OrderByDirection>;
  final_position?: InputMaybe<OrderByDirection>;
  horse_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  jockey_id?: InputMaybe<OrderByDirection>;
  late_scratch_time?: InputMaybe<OrderByDirection>;
  margin?: InputMaybe<OrderByDirection>;
  race_id?: InputMaybe<OrderByDirection>;
  scratching_type?: InputMaybe<OrderByDirection>;
  steward_comment?: InputMaybe<OrderByDirection>;
  trainer_id?: InputMaybe<OrderByDirection>;
  weight_total?: InputMaybe<OrderByDirection>;
};

export type CompetitorsUpdateInput = {
  barrier?: InputMaybe<Scalars["Int"]["input"]>;
  competitor_number?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  elapsed_time_ms?: InputMaybe<Scalars["BigInt"]["input"]>;
  failed_to_finish?: InputMaybe<Scalars["Boolean"]["input"]>;
  failed_to_finish_reason?: InputMaybe<Scalars["String"]["input"]>;
  final_position?: InputMaybe<Scalars["Int"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  jockey_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  late_scratch_time?: InputMaybe<Scalars["Datetime"]["input"]>;
  margin?: InputMaybe<Scalars["Float"]["input"]>;
  odds?: InputMaybe<Scalars["JSON"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  scratching_type?: InputMaybe<Scalars["String"]["input"]>;
  silks?: InputMaybe<Scalars["JSON"]["input"]>;
  steward_comment?: InputMaybe<Scalars["String"]["input"]>;
  trainer_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  weight_total?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CompetitorsUpdateResponse = {
  __typename?: "competitorsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Competitors>;
};

export type Dividends = Node & {
  __typename?: "dividends";
  dividend: Maybe<Scalars["Float"]["output"]>;
  dividend_numbers: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  race_id: Maybe<Scalars["BigInt"]["output"]>;
  races: Maybe<Races>;
  source: Maybe<Scalars["String"]["output"]>;
  type: Maybe<Scalars["String"]["output"]>;
};

export type DividendsConnection = {
  __typename?: "dividendsConnection";
  edges: Array<DividendsEdge>;
  pageInfo: PageInfo;
};

export type DividendsDeleteResponse = {
  __typename?: "dividendsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Dividends>;
};

export type DividendsEdge = {
  __typename?: "dividendsEdge";
  cursor: Scalars["String"]["output"];
  node: Dividends;
};

export type DividendsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<DividendsFilter>>;
  dividend?: InputMaybe<FloatFilter>;
  dividend_numbers?: InputMaybe<IntListFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<DividendsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<DividendsFilter>>;
  race_id?: InputMaybe<BigIntFilter>;
  source?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type DividendsInsertInput = {
  dividend?: InputMaybe<Scalars["Float"]["input"]>;
  dividend_numbers?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type DividendsInsertResponse = {
  __typename?: "dividendsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Dividends>;
};

export type DividendsOrderBy = {
  dividend?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  race_id?: InputMaybe<OrderByDirection>;
  source?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
};

export type DividendsUpdateInput = {
  dividend?: InputMaybe<Scalars["Float"]["input"]>;
  dividend_numbers?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type DividendsUpdateResponse = {
  __typename?: "dividendsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Dividends>;
};

export type Followers = Node & {
  __typename?: "followers";
  created_at: Scalars["Datetime"]["output"];
  follower_id: Maybe<Scalars["UUID"]["output"]>;
  following_id: Maybe<Scalars["UUID"]["output"]>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
};

export type FollowersConnection = {
  __typename?: "followersConnection";
  edges: Array<FollowersEdge>;
  pageInfo: PageInfo;
};

export type FollowersDeleteResponse = {
  __typename?: "followersDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Followers>;
};

export type FollowersEdge = {
  __typename?: "followersEdge";
  cursor: Scalars["String"]["output"];
  node: Followers;
};

export type FollowersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<FollowersFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  follower_id?: InputMaybe<UuidFilter>;
  following_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<FollowersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<FollowersFilter>>;
};

export type FollowersInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  follower_id?: InputMaybe<Scalars["UUID"]["input"]>;
  following_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type FollowersInsertResponse = {
  __typename?: "followersInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Followers>;
};

export type FollowersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  follower_id?: InputMaybe<OrderByDirection>;
  following_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type FollowersUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  follower_id?: InputMaybe<Scalars["UUID"]["input"]>;
  following_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type FollowersUpdateResponse = {
  __typename?: "followersUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Followers>;
};

export type Global_Quick_Fire_Buttons = Node & {
  __typename?: "global_quick_fire_buttons";
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["BigInt"]["output"];
  name: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  votable_global_quick_fire_buttonsCollection: Maybe<Votable_Global_Quick_Fire_ButtonsConnection>;
};

export type Global_Quick_Fire_ButtonsVotable_Global_Quick_Fire_ButtonsCollectionArgs =
  {
    after?: InputMaybe<Scalars["Cursor"]["input"]>;
    before?: InputMaybe<Scalars["Cursor"]["input"]>;
    filter?: InputMaybe<Votable_Global_Quick_Fire_ButtonsFilter>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<Array<Votable_Global_Quick_Fire_ButtonsOrderBy>>;
  };

export type Global_Quick_Fire_ButtonsConnection = {
  __typename?: "global_quick_fire_buttonsConnection";
  edges: Array<Global_Quick_Fire_ButtonsEdge>;
  pageInfo: PageInfo;
};

export type Global_Quick_Fire_ButtonsDeleteResponse = {
  __typename?: "global_quick_fire_buttonsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Global_Quick_Fire_Buttons>;
};

export type Global_Quick_Fire_ButtonsEdge = {
  __typename?: "global_quick_fire_buttonsEdge";
  cursor: Scalars["String"]["output"];
  node: Global_Quick_Fire_Buttons;
};

export type Global_Quick_Fire_ButtonsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Global_Quick_Fire_ButtonsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Global_Quick_Fire_ButtonsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Global_Quick_Fire_ButtonsFilter>>;
};

export type Global_Quick_Fire_ButtonsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Global_Quick_Fire_ButtonsInsertResponse = {
  __typename?: "global_quick_fire_buttonsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Global_Quick_Fire_Buttons>;
};

export type Global_Quick_Fire_ButtonsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type Global_Quick_Fire_ButtonsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Global_Quick_Fire_ButtonsUpdateResponse = {
  __typename?: "global_quick_fire_buttonsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Global_Quick_Fire_Buttons>;
};

export enum Horse_Sex {
  Female = "female",
  Male = "male",
}

/** Boolean expression comparing fields on type "horse_sex" */
export type Horse_SexFilter = {
  eq?: InputMaybe<Horse_Sex>;
  in?: InputMaybe<Array<Horse_Sex>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Horse_Sex>;
};

export type Horses = Node & {
  __typename?: "horses";
  age: Maybe<Scalars["Int"]["output"]>;
  black_book_runner_subscriptionsCollection: Maybe<Black_Book_Runner_SubscriptionsConnection>;
  competitorsCollection: Maybe<CompetitorsConnection>;
  created_at: Scalars["Datetime"]["output"];
  dam: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  name: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  oddsCollection: Maybe<OddsConnection>;
  owners: Maybe<Scalars["String"]["output"]>;
  races: Maybe<Scalars["BigInt"]["output"]>;
  seconds: Maybe<Scalars["BigInt"]["output"]>;
  sex: Maybe<Horse_Sex>;
  sire: Maybe<Scalars["String"]["output"]>;
  thirds: Maybe<Scalars["BigInt"]["output"]>;
  user_race_commentsCollection: Maybe<User_Race_CommentsConnection>;
  votable_quick_fire_buttonsCollection: Maybe<Votable_Quick_Fire_ButtonsConnection>;
  wins: Maybe<Scalars["BigInt"]["output"]>;
};

export type HorsesBlack_Book_Runner_SubscriptionsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Black_Book_Runner_SubscriptionsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Black_Book_Runner_SubscriptionsOrderBy>>;
};

export type HorsesCompetitorsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<CompetitorsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CompetitorsOrderBy>>;
};

export type HorsesOddsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<OddsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OddsOrderBy>>;
};

export type HorsesUser_Race_CommentsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<User_Race_CommentsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<User_Race_CommentsOrderBy>>;
};

export type HorsesVotable_Quick_Fire_ButtonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Votable_Quick_Fire_ButtonsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Votable_Quick_Fire_ButtonsOrderBy>>;
};

export type HorsesConnection = {
  __typename?: "horsesConnection";
  edges: Array<HorsesEdge>;
  pageInfo: PageInfo;
};

export type HorsesDeleteResponse = {
  __typename?: "horsesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Horses>;
};

export type HorsesEdge = {
  __typename?: "horsesEdge";
  cursor: Scalars["String"]["output"];
  node: Horses;
};

export type HorsesFilter = {
  age?: InputMaybe<IntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<HorsesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  dam?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<HorsesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<HorsesFilter>>;
  owners?: InputMaybe<StringFilter>;
  races?: InputMaybe<BigIntFilter>;
  seconds?: InputMaybe<BigIntFilter>;
  sex?: InputMaybe<Horse_SexFilter>;
  sire?: InputMaybe<StringFilter>;
  thirds?: InputMaybe<BigIntFilter>;
  wins?: InputMaybe<BigIntFilter>;
};

export type HorsesInsertInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  dam?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  owners?: InputMaybe<Scalars["String"]["input"]>;
  races?: InputMaybe<Scalars["BigInt"]["input"]>;
  seconds?: InputMaybe<Scalars["BigInt"]["input"]>;
  sex?: InputMaybe<Horse_Sex>;
  sire?: InputMaybe<Scalars["String"]["input"]>;
  thirds?: InputMaybe<Scalars["BigInt"]["input"]>;
  wins?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type HorsesInsertResponse = {
  __typename?: "horsesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Horses>;
};

export type HorsesOrderBy = {
  age?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  dam?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  owners?: InputMaybe<OrderByDirection>;
  races?: InputMaybe<OrderByDirection>;
  seconds?: InputMaybe<OrderByDirection>;
  sex?: InputMaybe<OrderByDirection>;
  sire?: InputMaybe<OrderByDirection>;
  thirds?: InputMaybe<OrderByDirection>;
  wins?: InputMaybe<OrderByDirection>;
};

export type HorsesUpdateInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  dam?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  owners?: InputMaybe<Scalars["String"]["input"]>;
  races?: InputMaybe<Scalars["BigInt"]["input"]>;
  seconds?: InputMaybe<Scalars["BigInt"]["input"]>;
  sex?: InputMaybe<Horse_Sex>;
  sire?: InputMaybe<Scalars["String"]["input"]>;
  thirds?: InputMaybe<Scalars["BigInt"]["input"]>;
  wins?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type HorsesUpdateResponse = {
  __typename?: "horsesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Horses>;
};

export type Jockeys = Node & {
  __typename?: "jockeys";
  competitorsCollection: Maybe<CompetitorsConnection>;
  created_at: Scalars["Datetime"]["output"];
  full_name: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
};

export type JockeysCompetitorsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<CompetitorsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CompetitorsOrderBy>>;
};

export type JockeysConnection = {
  __typename?: "jockeysConnection";
  edges: Array<JockeysEdge>;
  pageInfo: PageInfo;
};

export type JockeysDeleteResponse = {
  __typename?: "jockeysDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Jockeys>;
};

export type JockeysEdge = {
  __typename?: "jockeysEdge";
  cursor: Scalars["String"]["output"];
  node: Jockeys;
};

export type JockeysFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<JockeysFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  full_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<JockeysFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<JockeysFilter>>;
};

export type JockeysInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
};

export type JockeysInsertResponse = {
  __typename?: "jockeysInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Jockeys>;
};

export type JockeysOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  full_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type JockeysUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
};

export type JockeysUpdateResponse = {
  __typename?: "jockeysUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Jockeys>;
};

export type Meetings = Node & {
  __typename?: "meetings";
  created_at: Scalars["Datetime"]["output"];
  date: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  racesCollection: Maybe<RacesConnection>;
  rails: Maybe<Scalars["String"]["output"]>;
  tab_indicator: Maybe<Scalars["String"]["output"]>;
  track_id: Maybe<Scalars["BigInt"]["output"]>;
  tracks: Maybe<Tracks>;
};

export type MeetingsRacesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<RacesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RacesOrderBy>>;
};

export type MeetingsConnection = {
  __typename?: "meetingsConnection";
  edges: Array<MeetingsEdge>;
  pageInfo: PageInfo;
};

export type MeetingsDeleteResponse = {
  __typename?: "meetingsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Meetings>;
};

export type MeetingsEdge = {
  __typename?: "meetingsEdge";
  cursor: Scalars["String"]["output"];
  node: Meetings;
};

export type MeetingsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MeetingsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  date?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MeetingsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MeetingsFilter>>;
  rails?: InputMaybe<StringFilter>;
  tab_indicator?: InputMaybe<StringFilter>;
  track_id?: InputMaybe<BigIntFilter>;
};

export type MeetingsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  date?: InputMaybe<Scalars["Datetime"]["input"]>;
  rails?: InputMaybe<Scalars["String"]["input"]>;
  tab_indicator?: InputMaybe<Scalars["String"]["input"]>;
  track_id?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type MeetingsInsertResponse = {
  __typename?: "meetingsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Meetings>;
};

export type MeetingsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  date?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  rails?: InputMaybe<OrderByDirection>;
  tab_indicator?: InputMaybe<OrderByDirection>;
  track_id?: InputMaybe<OrderByDirection>;
};

export type MeetingsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  date?: InputMaybe<Scalars["Datetime"]["input"]>;
  rails?: InputMaybe<Scalars["String"]["input"]>;
  tab_indicator?: InputMaybe<Scalars["String"]["input"]>;
  track_id?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type MeetingsUpdateResponse = {
  __typename?: "meetingsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Meetings>;
};

export type Odds = Node & {
  __typename?: "odds";
  competitor_number: Maybe<Scalars["BigInt"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  horse_id: Maybe<Scalars["BigInt"]["output"]>;
  horses: Maybe<Horses>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  place_fixed: Maybe<Scalars["Float"]["output"]>;
  race_id: Maybe<Scalars["BigInt"]["output"]>;
  races: Maybe<Races>;
  source: Maybe<Scalars["String"]["output"]>;
  type: Maybe<Scalars["String"]["output"]>;
  win_fixed: Maybe<Scalars["Float"]["output"]>;
};

export type OddsConnection = {
  __typename?: "oddsConnection";
  edges: Array<OddsEdge>;
  pageInfo: PageInfo;
};

export type OddsDeleteResponse = {
  __typename?: "oddsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Odds>;
};

export type OddsEdge = {
  __typename?: "oddsEdge";
  cursor: Scalars["String"]["output"];
  node: Odds;
};

export type OddsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OddsFilter>>;
  competitor_number?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  horse_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OddsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OddsFilter>>;
  place_fixed?: InputMaybe<FloatFilter>;
  race_id?: InputMaybe<BigIntFilter>;
  source?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  win_fixed?: InputMaybe<FloatFilter>;
};

export type OddsInsertInput = {
  competitor_number?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  place_fixed?: InputMaybe<Scalars["Float"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  win_fixed?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OddsInsertResponse = {
  __typename?: "oddsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Odds>;
};

export type OddsOrderBy = {
  competitor_number?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  horse_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  place_fixed?: InputMaybe<OrderByDirection>;
  race_id?: InputMaybe<OrderByDirection>;
  source?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  win_fixed?: InputMaybe<OrderByDirection>;
};

export type OddsUpdateInput = {
  competitor_number?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  place_fixed?: InputMaybe<Scalars["Float"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  win_fixed?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OddsUpdateResponse = {
  __typename?: "oddsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Odds>;
};

export type Profiles = Node & {
  __typename?: "profiles";
  created_at: Scalars["Datetime"]["output"];
  first_name: Maybe<Scalars["String"]["output"]>;
  full_name: Maybe<Scalars["String"]["output"]>;
  id: Scalars["UUID"]["output"];
  last_name: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  username: Maybe<Scalars["String"]["output"]>;
};

export type ProfilesConnection = {
  __typename?: "profilesConnection";
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: "profilesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: "profilesEdge";
  cursor: Scalars["String"]["output"];
  node: Profiles;
};

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  first_name?: InputMaybe<StringFilter>;
  full_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  last_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>;
  username?: InputMaybe<StringFilter>;
};

export type ProfilesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProfilesInsertResponse = {
  __typename?: "profilesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  full_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProfilesUpdateResponse = {
  __typename?: "profilesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export enum Quick_Fire_Button_Text {
  BadBarrier = "Bad_barrier",
  BlockedForARun = "Blocked_for_a_run",
  CheckedAtCrucial = "Checked_at_crucial",
  ComeFromBack = "Come_from_back",
  DominantWinner = "Dominant_winner",
  EyeCatchingLate = "Eye_catching_late",
  MissedStart = "Missed_start",
  NeedsFurther = "Needs_further",
  NeedsShorter = "Needs_shorter",
  NeedsWetGround = "Needs_wet_ground",
  NotSuitedToWet = "Not_suited_to_wet",
  TrackPatternBias = "Track_pattern_bias",
  WideNoCover = "Wide_no_cover",
}

/** Boolean expression comparing fields on type "quick_fire_button_text" */
export type Quick_Fire_Button_TextFilter = {
  eq?: InputMaybe<Quick_Fire_Button_Text>;
  in?: InputMaybe<Array<Quick_Fire_Button_Text>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Quick_Fire_Button_Text>;
};

export type Race_Quick_Fire_Buttons = Node & {
  __typename?: "race_quick_fire_buttons";
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["BigInt"]["output"];
  label: Maybe<Quick_Fire_Button_Text>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  votable_quick_fire_buttonsCollection: Maybe<Votable_Quick_Fire_ButtonsConnection>;
};

export type Race_Quick_Fire_ButtonsVotable_Quick_Fire_ButtonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Votable_Quick_Fire_ButtonsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Votable_Quick_Fire_ButtonsOrderBy>>;
};

export type Race_Quick_Fire_ButtonsConnection = {
  __typename?: "race_quick_fire_buttonsConnection";
  edges: Array<Race_Quick_Fire_ButtonsEdge>;
  pageInfo: PageInfo;
};

export type Race_Quick_Fire_ButtonsDeleteResponse = {
  __typename?: "race_quick_fire_buttonsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Race_Quick_Fire_Buttons>;
};

export type Race_Quick_Fire_ButtonsEdge = {
  __typename?: "race_quick_fire_buttonsEdge";
  cursor: Scalars["String"]["output"];
  node: Race_Quick_Fire_Buttons;
};

export type Race_Quick_Fire_ButtonsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Race_Quick_Fire_ButtonsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  label?: InputMaybe<Quick_Fire_Button_TextFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Race_Quick_Fire_ButtonsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Race_Quick_Fire_ButtonsFilter>>;
};

export type Race_Quick_Fire_ButtonsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  label?: InputMaybe<Quick_Fire_Button_Text>;
};

export type Race_Quick_Fire_ButtonsInsertResponse = {
  __typename?: "race_quick_fire_buttonsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Race_Quick_Fire_Buttons>;
};

export type Race_Quick_Fire_ButtonsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  label?: InputMaybe<OrderByDirection>;
};

export type Race_Quick_Fire_ButtonsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  label?: InputMaybe<Quick_Fire_Button_Text>;
};

export type Race_Quick_Fire_ButtonsUpdateResponse = {
  __typename?: "race_quick_fire_buttonsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Race_Quick_Fire_Buttons>;
};

export type Races = Node & {
  __typename?: "races";
  class: Maybe<Scalars["String"]["output"]>;
  competitor_count: Maybe<Scalars["Int"]["output"]>;
  competitorsCollection: Maybe<CompetitorsConnection>;
  created_at: Scalars["Datetime"]["output"];
  distance: Maybe<Scalars["Int"]["output"]>;
  dividendsCollection: Maybe<DividendsConnection>;
  duration: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  meeting_id: Maybe<Scalars["BigInt"]["output"]>;
  meetings: Maybe<Meetings>;
  name: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  oddsCollection: Maybe<OddsConnection>;
  prize_money: Maybe<Scalars["BigInt"]["output"]>;
  race_number: Maybe<Scalars["BigInt"]["output"]>;
  rail: Maybe<Scalars["String"]["output"]>;
  scratchesCollection: Maybe<ScratchesConnection>;
  start_time: Maybe<Scalars["Datetime"]["output"]>;
  status: Maybe<Scalars["String"]["output"]>;
  tab_indicator: Maybe<Scalars["String"]["output"]>;
  tipsCollection: Maybe<TipsConnection>;
  top_4_numbers: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  track_condition: Maybe<Scalars["String"]["output"]>;
  track_id: Maybe<Scalars["BigInt"]["output"]>;
  tracks: Maybe<Tracks>;
  user_race_commentsCollection: Maybe<User_Race_CommentsConnection>;
  votable_quick_fire_buttonsCollection: Maybe<Votable_Quick_Fire_ButtonsConnection>;
  weather: Maybe<Scalars["String"]["output"]>;
};

export type RacesCompetitorsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<CompetitorsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CompetitorsOrderBy>>;
};

export type RacesDividendsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<DividendsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<DividendsOrderBy>>;
};

export type RacesOddsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<OddsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OddsOrderBy>>;
};

export type RacesScratchesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ScratchesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ScratchesOrderBy>>;
};

export type RacesTipsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<TipsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TipsOrderBy>>;
};

export type RacesUser_Race_CommentsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<User_Race_CommentsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<User_Race_CommentsOrderBy>>;
};

export type RacesVotable_Quick_Fire_ButtonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Votable_Quick_Fire_ButtonsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Votable_Quick_Fire_ButtonsOrderBy>>;
};

export type RacesConnection = {
  __typename?: "racesConnection";
  edges: Array<RacesEdge>;
  pageInfo: PageInfo;
};

export type RacesDeleteResponse = {
  __typename?: "racesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Races>;
};

export type RacesEdge = {
  __typename?: "racesEdge";
  cursor: Scalars["String"]["output"];
  node: Races;
};

export type RacesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RacesFilter>>;
  class?: InputMaybe<StringFilter>;
  competitor_count?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  distance?: InputMaybe<IntFilter>;
  duration?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  meeting_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RacesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RacesFilter>>;
  prize_money?: InputMaybe<BigIntFilter>;
  race_number?: InputMaybe<BigIntFilter>;
  rail?: InputMaybe<StringFilter>;
  start_time?: InputMaybe<DatetimeFilter>;
  status?: InputMaybe<StringFilter>;
  tab_indicator?: InputMaybe<StringFilter>;
  top_4_numbers?: InputMaybe<IntListFilter>;
  track_condition?: InputMaybe<StringFilter>;
  track_id?: InputMaybe<BigIntFilter>;
  weather?: InputMaybe<StringFilter>;
};

export type RacesInsertInput = {
  class?: InputMaybe<Scalars["String"]["input"]>;
  competitor_count?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  duration?: InputMaybe<Scalars["String"]["input"]>;
  meeting_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  prize_money?: InputMaybe<Scalars["BigInt"]["input"]>;
  race_number?: InputMaybe<Scalars["BigInt"]["input"]>;
  rail?: InputMaybe<Scalars["String"]["input"]>;
  start_time?: InputMaybe<Scalars["Datetime"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  tab_indicator?: InputMaybe<Scalars["String"]["input"]>;
  top_4_numbers?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  track_condition?: InputMaybe<Scalars["String"]["input"]>;
  track_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  weather?: InputMaybe<Scalars["String"]["input"]>;
};

export type RacesInsertResponse = {
  __typename?: "racesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Races>;
};

export type RacesOrderBy = {
  class?: InputMaybe<OrderByDirection>;
  competitor_count?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  distance?: InputMaybe<OrderByDirection>;
  duration?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  meeting_id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  prize_money?: InputMaybe<OrderByDirection>;
  race_number?: InputMaybe<OrderByDirection>;
  rail?: InputMaybe<OrderByDirection>;
  start_time?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  tab_indicator?: InputMaybe<OrderByDirection>;
  track_condition?: InputMaybe<OrderByDirection>;
  track_id?: InputMaybe<OrderByDirection>;
  weather?: InputMaybe<OrderByDirection>;
};

export type RacesUpdateInput = {
  class?: InputMaybe<Scalars["String"]["input"]>;
  competitor_count?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  duration?: InputMaybe<Scalars["String"]["input"]>;
  meeting_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  prize_money?: InputMaybe<Scalars["BigInt"]["input"]>;
  race_number?: InputMaybe<Scalars["BigInt"]["input"]>;
  rail?: InputMaybe<Scalars["String"]["input"]>;
  start_time?: InputMaybe<Scalars["Datetime"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  tab_indicator?: InputMaybe<Scalars["String"]["input"]>;
  top_4_numbers?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  track_condition?: InputMaybe<Scalars["String"]["input"]>;
  track_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  weather?: InputMaybe<Scalars["String"]["input"]>;
};

export type RacesUpdateResponse = {
  __typename?: "racesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Races>;
};

export type Scratches = Node & {
  __typename?: "scratches";
  competitor_number: Maybe<Scalars["Int"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  deductions: Maybe<Scalars["JSON"]["output"]>;
  emergency_competitor_number: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  race_id: Maybe<Scalars["BigInt"]["output"]>;
  races: Maybe<Races>;
  scratched_time: Maybe<Scalars["String"]["output"]>;
  status: Maybe<Scalars["String"]["output"]>;
};

export type ScratchesConnection = {
  __typename?: "scratchesConnection";
  edges: Array<ScratchesEdge>;
  pageInfo: PageInfo;
};

export type ScratchesDeleteResponse = {
  __typename?: "scratchesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Scratches>;
};

export type ScratchesEdge = {
  __typename?: "scratchesEdge";
  cursor: Scalars["String"]["output"];
  node: Scratches;
};

export type ScratchesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ScratchesFilter>>;
  competitor_number?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  emergency_competitor_number?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ScratchesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ScratchesFilter>>;
  race_id?: InputMaybe<BigIntFilter>;
  scratched_time?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
};

export type ScratchesInsertInput = {
  competitor_number?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  deductions?: InputMaybe<Scalars["JSON"]["input"]>;
  emergency_competitor_number?: InputMaybe<Scalars["Int"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  scratched_time?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScratchesInsertResponse = {
  __typename?: "scratchesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Scratches>;
};

export type ScratchesOrderBy = {
  competitor_number?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  emergency_competitor_number?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  race_id?: InputMaybe<OrderByDirection>;
  scratched_time?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
};

export type ScratchesUpdateInput = {
  competitor_number?: InputMaybe<Scalars["Int"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  deductions?: InputMaybe<Scalars["JSON"]["input"]>;
  emergency_competitor_number?: InputMaybe<Scalars["Int"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  scratched_time?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScratchesUpdateResponse = {
  __typename?: "scratchesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Scratches>;
};

export type Social_Post = Node & {
  __typename?: "social_post";
  creator_id: Maybe<Scalars["UUID"]["output"]>;
  id: Scalars["UUID"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  text: Maybe<Scalars["String"]["output"]>;
  type: Maybe<Scalars["String"]["output"]>;
};

export type Social_PostConnection = {
  __typename?: "social_postConnection";
  edges: Array<Social_PostEdge>;
  pageInfo: PageInfo;
};

export type Social_PostDeleteResponse = {
  __typename?: "social_postDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Social_Post>;
};

export type Social_PostEdge = {
  __typename?: "social_postEdge";
  cursor: Scalars["String"]["output"];
  node: Social_Post;
};

export type Social_PostFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Social_PostFilter>>;
  creator_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Social_PostFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Social_PostFilter>>;
  text?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type Social_PostInsertInput = {
  creator_id?: InputMaybe<Scalars["UUID"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type Social_PostInsertResponse = {
  __typename?: "social_postInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Social_Post>;
};

export type Social_PostOrderBy = {
  creator_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  text?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
};

export type Social_PostUpdateInput = {
  creator_id?: InputMaybe<Scalars["UUID"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type Social_PostUpdateResponse = {
  __typename?: "social_postUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Social_Post>;
};

export type Tips = Node & {
  __typename?: "tips";
  bet_amount: Maybe<Scalars["Float"]["output"]>;
  bet_amount_type: Maybe<Scalars["String"]["output"]>;
  bet_type: Maybe<Bet_Type>;
  comment: Maybe<Scalars["String"]["output"]>;
  competitor_numbers: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  created_at: Scalars["Datetime"]["output"];
  horse_ids: Maybe<Array<Maybe<Scalars["BigInt"]["output"]>>>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  race_id: Maybe<Scalars["BigInt"]["output"]>;
  races: Maybe<Races>;
  user_id: Maybe<Scalars["UUID"]["output"]>;
};

export type TipsConnection = {
  __typename?: "tipsConnection";
  edges: Array<TipsEdge>;
  pageInfo: PageInfo;
};

export type TipsDeleteResponse = {
  __typename?: "tipsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Tips>;
};

export type TipsEdge = {
  __typename?: "tipsEdge";
  cursor: Scalars["String"]["output"];
  node: Tips;
};

export type TipsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TipsFilter>>;
  bet_amount?: InputMaybe<FloatFilter>;
  bet_amount_type?: InputMaybe<StringFilter>;
  bet_type?: InputMaybe<Bet_TypeFilter>;
  comment?: InputMaybe<StringFilter>;
  competitor_numbers?: InputMaybe<IntListFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  horse_ids?: InputMaybe<BigIntListFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TipsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TipsFilter>>;
  race_id?: InputMaybe<BigIntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type TipsInsertInput = {
  bet_amount?: InputMaybe<Scalars["Float"]["input"]>;
  bet_amount_type?: InputMaybe<Scalars["String"]["input"]>;
  bet_type?: InputMaybe<Bet_Type>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  competitor_numbers?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_ids?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]["input"]>>>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type TipsInsertResponse = {
  __typename?: "tipsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Tips>;
};

export type TipsOrderBy = {
  bet_amount?: InputMaybe<OrderByDirection>;
  bet_amount_type?: InputMaybe<OrderByDirection>;
  bet_type?: InputMaybe<OrderByDirection>;
  comment?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  race_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type TipsUpdateInput = {
  bet_amount?: InputMaybe<Scalars["Float"]["input"]>;
  bet_amount_type?: InputMaybe<Scalars["String"]["input"]>;
  bet_type?: InputMaybe<Bet_Type>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  competitor_numbers?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_ids?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]["input"]>>>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type TipsUpdateResponse = {
  __typename?: "tipsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Tips>;
};

export enum Track_Condition {
  Firm1 = "firm1",
  Firm2 = "firm2",
  Good3 = "good3",
  Good4 = "good4",
  Heavy8 = "heavy8",
  Heavy9 = "heavy9",
  Heavy10 = "heavy10",
  Soft5 = "soft5",
  Soft6 = "soft6",
  Soft7 = "soft7",
}

/** Boolean expression comparing fields on type "track_condition" */
export type Track_ConditionFilter = {
  eq?: InputMaybe<Track_Condition>;
  in?: InputMaybe<Array<Track_Condition>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Track_Condition>;
};

export type Tracks = Node & {
  __typename?: "tracks";
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["BigInt"]["output"];
  meetingsCollection: Maybe<MeetingsConnection>;
  name: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  racesCollection: Maybe<RacesConnection>;
  state: Maybe<Scalars["String"]["output"]>;
  surface: Maybe<Scalars["String"]["output"]>;
};

export type TracksMeetingsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<MeetingsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};

export type TracksRacesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<RacesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RacesOrderBy>>;
};

export type TracksConnection = {
  __typename?: "tracksConnection";
  edges: Array<TracksEdge>;
  pageInfo: PageInfo;
};

export type TracksDeleteResponse = {
  __typename?: "tracksDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Tracks>;
};

export type TracksEdge = {
  __typename?: "tracksEdge";
  cursor: Scalars["String"]["output"];
  node: Tracks;
};

export type TracksFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TracksFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TracksFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TracksFilter>>;
  state?: InputMaybe<StringFilter>;
  surface?: InputMaybe<StringFilter>;
};

export type TracksInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  surface?: InputMaybe<Scalars["String"]["input"]>;
};

export type TracksInsertResponse = {
  __typename?: "tracksInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Tracks>;
};

export type TracksOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  state?: InputMaybe<OrderByDirection>;
  surface?: InputMaybe<OrderByDirection>;
};

export type TracksUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  surface?: InputMaybe<Scalars["String"]["input"]>;
};

export type TracksUpdateResponse = {
  __typename?: "tracksUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Tracks>;
};

export type Trainers = Node & {
  __typename?: "trainers";
  competitorsCollection: Maybe<CompetitorsConnection>;
  created_at: Scalars["Datetime"]["output"];
  full_name: Maybe<Scalars["String"]["output"]>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
};

export type TrainersCompetitorsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<CompetitorsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CompetitorsOrderBy>>;
};

export type TrainersConnection = {
  __typename?: "trainersConnection";
  edges: Array<TrainersEdge>;
  pageInfo: PageInfo;
};

export type TrainersDeleteResponse = {
  __typename?: "trainersDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Trainers>;
};

export type TrainersEdge = {
  __typename?: "trainersEdge";
  cursor: Scalars["String"]["output"];
  node: Trainers;
};

export type TrainersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TrainersFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  full_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TrainersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TrainersFilter>>;
};

export type TrainersInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
};

export type TrainersInsertResponse = {
  __typename?: "trainersInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Trainers>;
};

export type TrainersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  full_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type TrainersUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
};

export type TrainersUpdateResponse = {
  __typename?: "trainersUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Trainers>;
};

export type User_Race_Comments = Node & {
  __typename?: "user_race_comments";
  comment: Maybe<Scalars["String"]["output"]>;
  created_at: Maybe<Scalars["Datetime"]["output"]>;
  horse_id: Maybe<Scalars["BigInt"]["output"]>;
  horses: Maybe<Horses>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  race_id: Maybe<Scalars["BigInt"]["output"]>;
  races: Maybe<Races>;
  user_id: Maybe<Scalars["UUID"]["output"]>;
};

export type User_Race_CommentsConnection = {
  __typename?: "user_race_commentsConnection";
  edges: Array<User_Race_CommentsEdge>;
  pageInfo: PageInfo;
};

export type User_Race_CommentsDeleteResponse = {
  __typename?: "user_race_commentsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Race_Comments>;
};

export type User_Race_CommentsEdge = {
  __typename?: "user_race_commentsEdge";
  cursor: Scalars["String"]["output"];
  node: User_Race_Comments;
};

export type User_Race_CommentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_Race_CommentsFilter>>;
  comment?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  horse_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_Race_CommentsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_Race_CommentsFilter>>;
  race_id?: InputMaybe<BigIntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type User_Race_CommentsInsertInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type User_Race_CommentsInsertResponse = {
  __typename?: "user_race_commentsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Race_Comments>;
};

export type User_Race_CommentsOrderBy = {
  comment?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  horse_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  race_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type User_Race_CommentsUpdateInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type User_Race_CommentsUpdateResponse = {
  __typename?: "user_race_commentsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Race_Comments>;
};

export type User_Vc = Node & {
  __typename?: "user_vc";
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  user_id: Maybe<Scalars["UUID"]["output"]>;
  vc_amount: Maybe<Scalars["Float"]["output"]>;
};

export type User_VcConnection = {
  __typename?: "user_vcConnection";
  edges: Array<User_VcEdge>;
  pageInfo: PageInfo;
};

export type User_VcDeleteResponse = {
  __typename?: "user_vcDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Vc>;
};

export type User_VcEdge = {
  __typename?: "user_vcEdge";
  cursor: Scalars["String"]["output"];
  node: User_Vc;
};

export type User_VcFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_VcFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_VcFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_VcFilter>>;
  user_id?: InputMaybe<UuidFilter>;
  vc_amount?: InputMaybe<FloatFilter>;
};

export type User_VcInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
  vc_amount?: InputMaybe<Scalars["Float"]["input"]>;
};

export type User_VcInsertResponse = {
  __typename?: "user_vcInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Vc>;
};

export type User_VcOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
  vc_amount?: InputMaybe<OrderByDirection>;
};

export type User_VcUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
  vc_amount?: InputMaybe<Scalars["Float"]["input"]>;
};

export type User_VcUpdateResponse = {
  __typename?: "user_vcUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<User_Vc>;
};

export type Votable_Global_Quick_Fire_Buttons = Node & {
  __typename?: "votable_global_quick_fire_buttons";
  black_book_runner_subscriptions: Maybe<Black_Book_Runner_Subscriptions>;
  created_at: Scalars["Datetime"]["output"];
  global_quick_fire_button_id: Maybe<Scalars["BigInt"]["output"]>;
  global_quick_fire_buttons: Maybe<Global_Quick_Fire_Buttons>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  subscription_id: Maybe<Scalars["BigInt"]["output"]>;
  user_id: Maybe<Scalars["UUID"]["output"]>;
};

export type Votable_Global_Quick_Fire_ButtonsConnection = {
  __typename?: "votable_global_quick_fire_buttonsConnection";
  edges: Array<Votable_Global_Quick_Fire_ButtonsEdge>;
  pageInfo: PageInfo;
};

export type Votable_Global_Quick_Fire_ButtonsDeleteResponse = {
  __typename?: "votable_global_quick_fire_buttonsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Votable_Global_Quick_Fire_Buttons>;
};

export type Votable_Global_Quick_Fire_ButtonsEdge = {
  __typename?: "votable_global_quick_fire_buttonsEdge";
  cursor: Scalars["String"]["output"];
  node: Votable_Global_Quick_Fire_Buttons;
};

export type Votable_Global_Quick_Fire_ButtonsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Votable_Global_Quick_Fire_ButtonsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  global_quick_fire_button_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Votable_Global_Quick_Fire_ButtonsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Votable_Global_Quick_Fire_ButtonsFilter>>;
  subscription_id?: InputMaybe<BigIntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Votable_Global_Quick_Fire_ButtonsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  global_quick_fire_button_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  subscription_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Votable_Global_Quick_Fire_ButtonsInsertResponse = {
  __typename?: "votable_global_quick_fire_buttonsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Votable_Global_Quick_Fire_Buttons>;
};

export type Votable_Global_Quick_Fire_ButtonsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  global_quick_fire_button_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  subscription_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Votable_Global_Quick_Fire_ButtonsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  global_quick_fire_button_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  subscription_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Votable_Global_Quick_Fire_ButtonsUpdateResponse = {
  __typename?: "votable_global_quick_fire_buttonsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Votable_Global_Quick_Fire_Buttons>;
};

export type Votable_Quick_Fire_Buttons = Node & {
  __typename?: "votable_quick_fire_buttons";
  created_at: Scalars["Datetime"]["output"];
  horse_id: Maybe<Scalars["BigInt"]["output"]>;
  horses: Maybe<Horses>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  race_id: Maybe<Scalars["BigInt"]["output"]>;
  race_quick_fire_button_id: Maybe<Scalars["BigInt"]["output"]>;
  race_quick_fire_buttons: Maybe<Race_Quick_Fire_Buttons>;
  races: Maybe<Races>;
  user_id: Maybe<Scalars["UUID"]["output"]>;
};

export type Votable_Quick_Fire_ButtonsConnection = {
  __typename?: "votable_quick_fire_buttonsConnection";
  edges: Array<Votable_Quick_Fire_ButtonsEdge>;
  pageInfo: PageInfo;
};

export type Votable_Quick_Fire_ButtonsDeleteResponse = {
  __typename?: "votable_quick_fire_buttonsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Votable_Quick_Fire_Buttons>;
};

export type Votable_Quick_Fire_ButtonsEdge = {
  __typename?: "votable_quick_fire_buttonsEdge";
  cursor: Scalars["String"]["output"];
  node: Votable_Quick_Fire_Buttons;
};

export type Votable_Quick_Fire_ButtonsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Votable_Quick_Fire_ButtonsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  horse_id?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Votable_Quick_Fire_ButtonsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Votable_Quick_Fire_ButtonsFilter>>;
  race_id?: InputMaybe<BigIntFilter>;
  race_quick_fire_button_id?: InputMaybe<BigIntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Votable_Quick_Fire_ButtonsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  race_quick_fire_button_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Votable_Quick_Fire_ButtonsInsertResponse = {
  __typename?: "votable_quick_fire_buttonsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Votable_Quick_Fire_Buttons>;
};

export type Votable_Quick_Fire_ButtonsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  horse_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  race_id?: InputMaybe<OrderByDirection>;
  race_quick_fire_button_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Votable_Quick_Fire_ButtonsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  horse_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  race_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  race_quick_fire_button_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Votable_Quick_Fire_ButtonsUpdateResponse = {
  __typename?: "votable_quick_fire_buttonsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Votable_Quick_Fire_Buttons>;
};

export type GetBlackbookSubscriptionsQueryVariables = Exact<{
  user_id: Scalars["UUID"]["input"];
}>;

export type GetBlackbookSubscriptionsQuery = {
  __typename?: "Query";
  black_book_runner_subscriptionsCollection: {
    __typename?: "black_book_runner_subscriptionsConnection";
    edges: Array<{
      __typename?: "black_book_runner_subscriptionsEdge";
      node: {
        __typename?: "black_book_runner_subscriptions";
        id: any;
        horses: {
          __typename?: "horses";
          name: string | null;
          age: number | null;
          owners: string | null;
          wins: any | null;
          seconds: any | null;
          thirds: any | null;
          races: any | null;
          sire: string | null;
          dam: string | null;
        } | null;
      };
    }>;
  } | null;
};

export type GetFormGuideRacesQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetFormGuideRacesQuery = {
  __typename?: "Query";
  racesCollection: {
    __typename?: "racesConnection";
    edges: Array<{
      __typename?: "racesEdge";
      node: {
        __typename?: "races";
        id: any;
        status: string | null;
        distance: number | null;
        name: string | null;
        race_number: any | null;
        top_4_numbers: Array<number | null> | null;
        start_time: any | null;
        tracks: {
          __typename?: "tracks";
          id: any;
          name: string | null;
          state: string | null;
        } | null;
        oddsCollection: {
          __typename?: "oddsConnection";
          edges: Array<{
            __typename?: "oddsEdge";
            node: {
              __typename?: "odds";
              win_fixed: number | null;
              place_fixed: number | null;
              source: string | null;
              competitor_number: any | null;
            };
          }>;
        } | null;
        competitorsCollection: {
          __typename?: "competitorsConnection";
          edges: Array<{
            __typename?: "competitorsEdge";
            node: {
              __typename?: "competitors";
              barrier: number | null;
              competitor_number: number | null;
              horse_id: any | null;
              margin: number | null;
              weight_total: number | null;
              final_position: number | null;
              horses: { __typename?: "horses"; name: string | null } | null;
              jockeys: {
                __typename?: "jockeys";
                full_name: string | null;
              } | null;
              trainers: {
                __typename?: "trainers";
                full_name: string | null;
                id: any;
              } | null;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};

export type GetGlobalQuickFireButtonsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetGlobalQuickFireButtonsQuery = {
  __typename?: "Query";
  global_quick_fire_buttonsCollection: {
    __typename?: "global_quick_fire_buttonsConnection";
    edges: Array<{
      __typename?: "global_quick_fire_buttonsEdge";
      node: {
        __typename?: "global_quick_fire_buttons";
        id: any;
        name: string | null;
      };
    }>;
  } | null;
};

export type RemoveBlackbookSubscriptionMutationVariables = Exact<{
  subscriptionId?: InputMaybe<Scalars["BigInt"]["input"]>;
}>;

export type RemoveBlackbookSubscriptionMutation = {
  __typename?: "Mutation";
  deleteFromblack_book_runner_subscriptionsCollection: {
    __typename?: "black_book_runner_subscriptionsDeleteResponse";
    affectedCount: number;
  };
};

export type GetFormGuideOverviewQueryVariables = Exact<{
  startDate: Scalars["Datetime"]["input"];
  endDate: Scalars["Datetime"]["input"];
}>;

export type GetFormGuideOverviewQuery = {
  __typename?: "Query";
  meetingsCollection: {
    __typename?: "meetingsConnection";
    edges: Array<{
      __typename?: "meetingsEdge";
      node: {
        __typename?: "meetings";
        id: any;
        date: any | null;
        tracks: {
          __typename?: "tracks";
          name: string | null;
          state: string | null;
        } | null;
        racesCollection: {
          __typename?: "racesConnection";
          edges: Array<{
            __typename?: "racesEdge";
            node: {
              __typename?: "races";
              id: any;
              status: string | null;
              name: string | null;
              race_number: any | null;
              top_4_numbers: Array<number | null> | null;
              start_time: any | null;
              oddsCollection: {
                __typename?: "oddsConnection";
                edges: Array<{
                  __typename?: "oddsEdge";
                  node: {
                    __typename?: "odds";
                    win_fixed: number | null;
                    place_fixed: number | null;
                    source: string | null;
                    competitor_number: any | null;
                  };
                }>;
              } | null;
              competitorsCollection: {
                __typename?: "competitorsConnection";
                edges: Array<{
                  __typename?: "competitorsEdge";
                  node: {
                    __typename?: "competitors";
                    competitor_number: number | null;
                    horse_id: any | null;
                    margin: number | null;
                    weight_total: number | null;
                    final_position: number | null;
                    horses: {
                      __typename?: "horses";
                      name: string | null;
                    } | null;
                  };
                }>;
              } | null;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};

export const GetBlackbookSubscriptionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBlackbookSubscriptions" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "black_book_runner_subscriptionsCollection",
            },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "horses" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "age" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owners" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "wins" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "seconds" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "thirds" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "races" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sire" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "dam" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBlackbookSubscriptionsQuery,
  GetBlackbookSubscriptionsQueryVariables
>;
export const GetFormGuideRacesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetFormGuideRaces" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "startDate" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Datetime" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "endDate" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Datetime" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "racesCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "start_time" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "startDate" },
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "lte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "endDate" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "start_time" },
                      value: { kind: "EnumValue", value: "AscNullsLast" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "distance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "race_number" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tracks" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "state" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "top_4_numbers" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "oddsCollection" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "win_fixed",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "place_fixed",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "source",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "competitor_number",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "competitorsCollection",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "barrier",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "competitor_number",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "horse_id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "margin",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "weight_total",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "horses",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "name",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "jockeys",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "full_name",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "trainers",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "full_name",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "id",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "final_position",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "start_time" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetFormGuideRacesQuery,
  GetFormGuideRacesQueryVariables
>;
export const GetGlobalQuickFireButtonsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetGlobalQuickFireButtons" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "global_quick_fire_buttonsCollection",
            },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetGlobalQuickFireButtonsQuery,
  GetGlobalQuickFireButtonsQueryVariables
>;
export const RemoveBlackbookSubscriptionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RemoveBlackbookSubscription" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "subscriptionId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "deleteFromblack_book_runner_subscriptionsCollection",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "subscriptionId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedCount" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveBlackbookSubscriptionMutation,
  RemoveBlackbookSubscriptionMutationVariables
>;
export const GetFormGuideOverviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetFormGuideOverview" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "startDate" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Datetime" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "endDate" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Datetime" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "meetingsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tab_indicator" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "StringValue",
                              value: "T",
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "startDate" },
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "lte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "endDate" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "date" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tracks" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "state" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "racesCollection" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: {
                                          kind: "Name",
                                          value: "race_number",
                                        },
                                        value: {
                                          kind: "EnumValue",
                                          value: "AscNullsLast",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "status",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "name",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "race_number",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "top_4_numbers",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "oddsCollection",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "edges",
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "node",
                                                            },
                                                            selectionSet: {
                                                              kind: "SelectionSet",
                                                              selections: [
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "win_fixed",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "place_fixed",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "source",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "competitor_number",
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value:
                                                    "competitorsCollection",
                                                },
                                                arguments: [
                                                  {
                                                    kind: "Argument",
                                                    name: {
                                                      kind: "Name",
                                                      value: "first",
                                                    },
                                                    value: {
                                                      kind: "IntValue",
                                                      value: "4",
                                                    },
                                                  },
                                                  {
                                                    kind: "Argument",
                                                    name: {
                                                      kind: "Name",
                                                      value: "orderBy",
                                                    },
                                                    value: {
                                                      kind: "ObjectValue",
                                                      fields: [
                                                        {
                                                          kind: "ObjectField",
                                                          name: {
                                                            kind: "Name",
                                                            value:
                                                              "final_position",
                                                          },
                                                          value: {
                                                            kind: "EnumValue",
                                                            value:
                                                              "AscNullsLast",
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    kind: "Argument",
                                                    name: {
                                                      kind: "Name",
                                                      value: "filter",
                                                    },
                                                    value: {
                                                      kind: "ObjectValue",
                                                      fields: [
                                                        {
                                                          kind: "ObjectField",
                                                          name: {
                                                            kind: "Name",
                                                            value:
                                                              "final_position",
                                                          },
                                                          value: {
                                                            kind: "ObjectValue",
                                                            fields: [
                                                              {
                                                                kind: "ObjectField",
                                                                name: {
                                                                  kind: "Name",
                                                                  value: "neq",
                                                                },
                                                                value: {
                                                                  kind: "IntValue",
                                                                  value: "0",
                                                                },
                                                              },
                                                            ],
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                ],
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "edges",
                                                      },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "Field",
                                                            name: {
                                                              kind: "Name",
                                                              value: "node",
                                                            },
                                                            selectionSet: {
                                                              kind: "SelectionSet",
                                                              selections: [
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "competitor_number",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "horse_id",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "margin",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "weight_total",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "final_position",
                                                                  },
                                                                },
                                                                {
                                                                  kind: "Field",
                                                                  name: {
                                                                    kind: "Name",
                                                                    value:
                                                                      "horses",
                                                                  },
                                                                  selectionSet:
                                                                    {
                                                                      kind: "SelectionSet",
                                                                      selections:
                                                                        [
                                                                          {
                                                                            kind: "Field",
                                                                            name: {
                                                                              kind: "Name",
                                                                              value:
                                                                                "name",
                                                                            },
                                                                          },
                                                                        ],
                                                                    },
                                                                },
                                                              ],
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "start_time",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetFormGuideOverviewQuery,
  GetFormGuideOverviewQueryVariables
>;
