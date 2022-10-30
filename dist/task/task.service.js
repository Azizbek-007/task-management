"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getTasks() {
        const found = await this.taskRepository.find();
        if (found.length === 0) {
            throw new common_1.NotFoundException();
        }
        return found;
    }
    async CreateTask(createTaskDto, user) {
        const task = new task_entity_1.Task();
        task.title = createTaskDto.title;
        task.description = createTaskDto.description;
        task.user = user;
        await task.save();
        delete task.user;
        return task;
    }
    async ShowTask(id) {
        const task = await this.taskRepository.findOneBy({ id });
        if (!task) {
            throw new common_1.NotFoundException();
        }
        return task;
    }
    async UpdateTask(id, updateTaskDto, user) {
        const task = await this.taskRepository.findOneBy({ id, userId: user.id });
        if (!task) {
            throw new common_1.NotFoundException();
        }
        task.title = updateTaskDto.title;
        task.description = updateTaskDto.description;
        task.status = updateTaskDto.status;
        await task.save();
        return task;
    }
    async DestoryTask(id, user) {
        const result = await this.taskRepository.delete({ id, userId: user.id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with ID "${id}" not found`);
        }
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map