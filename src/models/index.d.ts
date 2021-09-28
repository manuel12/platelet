import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Role {
  COORDINATOR = "COORDINATOR",
  RIDER = "RIDER",
  ADMIN = "ADMIN"
}

export enum Patch {
  NORTH = "NORTH",
  WEST = "WEST",
  EAST = "EAST",
  SOUTH = "SOUTH",
  RELIEF = "RELIEF",
  AIR_AMBULANCE = "AIR_AMBULANCE"
}

export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

export enum DeliverableUnit {
  LITRE = "LITRE",
  MILLILITRES = "MILLILITRES",
  GRAMS = "GRAMS",
  COUNT = "COUNT",
  BOX = "BOX"
}

export enum TaskStatus {
  NEW = "NEW",
  ACTIVE = "ACTIVE",
  PICKED_UP = "PICKED_UP",
  DROPPED_OFF = "DROPPED_OFF",
  CANCELLED = "CANCELLED",
  REJECTED = "REJECTED"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressAndContactDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VehicleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserTasksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoordinatorTasksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DeliverableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DeliverableTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly contact?: AddressAndContactDetails;
  readonly displayName: string;
  readonly name?: string;
  readonly roles: Role[] | keyof typeof Role;
  readonly dateOfBirth?: string;
  readonly vehicles?: (Vehicle | null)[];
  readonly patch?: (Patch | null)[] | keyof typeof Patch;
  readonly profilePictureURL?: string;
  readonly profilePictureThumbnailURL?: string;
  readonly group?: Group;
  readonly tasks?: (UserTasks | null)[];
  readonly tasksCoordinator?: (CoordinatorTasks | null)[];
  readonly active: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class AddressAndContactDetails {
  readonly id: string;
  readonly name?: string;
  readonly telephoneNumber?: string;
  readonly mobileNumber?: string;
  readonly emailAddress?: string;
  readonly ward?: string;
  readonly line1?: string;
  readonly line2?: string;
  readonly line3?: string;
  readonly town?: string;
  readonly county?: string;
  readonly state?: string;
  readonly country?: string;
  readonly postcode?: string;
  readonly what3words?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AddressAndContactDetails, AddressAndContactDetailsMetaData>);
  static copyOf(source: AddressAndContactDetails, mutator: (draft: MutableModel<AddressAndContactDetails, AddressAndContactDetailsMetaData>) => MutableModel<AddressAndContactDetails, AddressAndContactDetailsMetaData> | void): AddressAndContactDetails;
}

export declare class Vehicle {
  readonly id: string;
  readonly name: string;
  readonly manufacturer?: string;
  readonly model?: string;
  readonly dateOfManufacture?: string;
  readonly dateOfRegistration?: string;
  readonly assignedUser?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Vehicle, VehicleMetaData>);
  static copyOf(source: Vehicle, mutator: (draft: MutableModel<Vehicle, VehicleMetaData>) => MutableModel<Vehicle, VehicleMetaData> | void): Vehicle;
}

export declare class Comment {
  readonly id: string;
  readonly parentID: string;
  readonly body: string;
  readonly author?: User;
  readonly publiclyVisible?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Group {
  readonly id: string;
  readonly taskGroupId?: string;
  readonly name?: string;
  readonly users?: (User | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Group, GroupMetaData>);
  static copyOf(source: Group, mutator: (draft: MutableModel<Group, GroupMetaData>) => MutableModel<Group, GroupMetaData> | void): Group;
}

export declare class UserTasks {
  readonly id: string;
  readonly user?: User;
  readonly task?: Task;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserTasks, UserTasksMetaData>);
  static copyOf(source: UserTasks, mutator: (draft: MutableModel<UserTasks, UserTasksMetaData>) => MutableModel<UserTasks, UserTasksMetaData> | void): UserTasks;
}

export declare class Task {
  readonly id: string;
  readonly name?: string;
  readonly createdBy?: User;
  readonly timeOfCall?: string;
  readonly timePickedUp?: string;
  readonly timeDroppedOff?: string;
  readonly timeCancelled?: string;
  readonly timeRejected?: string;
  readonly pickupLocation?: AddressAndContactDetails;
  readonly dropoffLocation?: AddressAndContactDetails;
  readonly patch?: Patch | keyof typeof Patch;
  readonly coordinators?: (CoordinatorTasks | null)[];
  readonly riders?: (UserTasks | null)[];
  readonly priority?: Priority | keyof typeof Priority;
  readonly relayPrevious?: Task;
  readonly relayNext?: Task;
  readonly group?: (Group | null)[];
  readonly comments?: Comment[];
  readonly status: TaskStatus | keyof typeof TaskStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class CoordinatorTasks {
  readonly id: string;
  readonly coordinator?: User;
  readonly task?: Task;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CoordinatorTasks, CoordinatorTasksMetaData>);
  static copyOf(source: CoordinatorTasks, mutator: (draft: MutableModel<CoordinatorTasks, CoordinatorTasksMetaData>) => MutableModel<CoordinatorTasks, CoordinatorTasksMetaData> | void): CoordinatorTasks;
}

export declare class Deliverable {
  readonly id: string;
  readonly count: number;
  readonly unit?: DeliverableUnit | keyof typeof DeliverableUnit;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Deliverable, DeliverableMetaData>);
  static copyOf(source: Deliverable, mutator: (draft: MutableModel<Deliverable, DeliverableMetaData>) => MutableModel<Deliverable, DeliverableMetaData> | void): Deliverable;
}

export declare class DeliverableType {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DeliverableType, DeliverableTypeMetaData>);
  static copyOf(source: DeliverableType, mutator: (draft: MutableModel<DeliverableType, DeliverableTypeMetaData>) => MutableModel<DeliverableType, DeliverableTypeMetaData> | void): DeliverableType;
}

export declare class Location {
  readonly id: string;
  readonly name?: string;
  readonly address?: AddressAndContactDetails;
  readonly listed?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Location, LocationMetaData>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}