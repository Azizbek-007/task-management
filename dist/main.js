"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = process.env.PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['debug', 'error', 'verbose', 'warn'],
        bodyParser: true
    });
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT, () => console.log(`🚀 Application listing on port ${PORT} 🚀`));
}
bootstrap();
//# sourceMappingURL=main.js.map