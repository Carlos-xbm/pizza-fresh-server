import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Servidor rodando! 🚀\n Por favor Verifique http://localhost:3333/api por swagger docs. ';
  }
}
