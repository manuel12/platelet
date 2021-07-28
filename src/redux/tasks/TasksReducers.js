import {
    getTasksActions,
    taskCategoryActions,
    REPLACE_TASKS_STATE,
} from "./TasksActions";
import {
    findExistingTaskParent,
    findExistingTaskParentByID,
    removeParentFromTasks,
} from "./task_redux_utilities";
import _ from "lodash"

export const initialTasksState = {
    tasks: {
        tasksNew: {},
        tasksActive: {},
        tasksRejected: {},
        tasksCancelled: {},
        tasksPickedUp: {},
        tasksDelivered: {}
    },
    fetched: false,
    error: null
}

const categoriesCondense = () => {
    let result = [];
    for (const value of Object.values(taskCategoryActions)) {
        result.push(value.add);
    }
    return result;
}
const categoriesCheck = categoriesCondense();

export function tasks(state = initialTasksState, action) {
    let filteredTasks = state.tasks;
    if (categoriesCheck.includes(action.type)) {
        // we're adding to state -
        // find the first task we can
        let task;
        for (const g of Object.values(action.data)) {
            for (const t of Object.values(g)) {
                task = t;
                break;
            }
            break;
        }
        // get the rest of the parent group from state
        const parent = findExistingTaskParent(state.tasks, task.uuid);
        if (parent.taskGroup) {
            // if we find it, filter it from existing state and use that in the main reducer
            filteredTasks = removeParentFromTasks(state.tasks, parent.listType, task.parent_id);
            if ([taskCategoryActions.tasksRejected.add, taskCategoryActions.tasksCancelled.add].includes(action.type)) {
                const existingCheck = findExistingTaskParentByID(
                    _.pick(state.tasks, ["tasksRejected", "tasksCancelled"])
                , parent.parentID);
                if (existingCheck.taskGroup)
                    action.data[parent.parentID] = {...existingCheck.taskGroup, ...action.data[parent.parentID]}

            }
        }
    }
    switch (action.type) {
        case taskCategoryActions.tasksNew.put:
            return {tasks: {...filteredTasks, tasksNew: action.data}, error: null, fetched: state.fetched};
        case taskCategoryActions.tasksNew.add:
            return {tasks: {...filteredTasks, tasksNew: {...filteredTasks.tasksNew, ...action.data}}, error: null, fetched: state.fetched}
        case taskCategoryActions.tasksActive.put:
            return {tasks: {...filteredTasks, tasksActive: action.data}, error: null, fetched: state.fetched};
        case taskCategoryActions.tasksActive.add:
            return {tasks: {...filteredTasks, tasksActive: {...filteredTasks.tasksActive, ...action.data}}, error: null, fetched: state.fetched}
        case taskCategoryActions.tasksPickedUp.put:
            return {tasks: {...filteredTasks, tasksPickedUp: action.data}, error: null, fetched: state.fetched};
        case taskCategoryActions.tasksPickedUp.add:
            return {tasks: {...filteredTasks, tasksPickedUp: {...filteredTasks.tasksPickedUp, ...action.data}}, error: null, fetched: state.fetched}
        case taskCategoryActions.tasksDelivered.put:
            return {tasks: {...filteredTasks, tasksDelivered: action.data}, error: null, fetched: state.fetched};
        case taskCategoryActions.tasksDelivered.add:
            return {tasks: {...filteredTasks, tasksDelivered: {...filteredTasks.tasksDelivered, ...action.data}}, error: null, fetched: state.fetched}
        case taskCategoryActions.tasksRejected.put:
            return {tasks: {...filteredTasks, tasksRejected: action.data}, error: null, fetched: state.fetched};
        case taskCategoryActions.tasksRejected.add:
            return {tasks: {...filteredTasks, tasksRejected: {...filteredTasks.tasksRejected, ...action.data}}, error: null, fetched: state.fetched}
        case taskCategoryActions.tasksCancelled.put:
            return {tasks: {...filteredTasks, tasksCancelled: action.data}, error: null, fetched: state.fetched};
        case taskCategoryActions.tasksCancelled.add:
            return {tasks: {...filteredTasks, tasksCancelled: {...filteredTasks.tasksCancelled, ...action.data}}, error: null, fetched: state.fetched}
        case getTasksActions.success:
        case REPLACE_TASKS_STATE:
            return {tasks: action.data, error: null, fetched: action.fetched};
        case getTasksActions.failure:
            return {...initialTasksState, error: action.error, fetched: false};
        default:
            return state;
    }
}
