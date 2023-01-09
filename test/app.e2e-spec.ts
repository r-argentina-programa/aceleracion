import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { execSync } from 'child_process';
import { join } from 'path';
import {renameSync, writeFileSync} from 'fs';

const dotenvBinary = join(
    __dirname,
    '..',
    'node_modules',
    '.bin',
    'dotenv',
);

const prismaBinary = join(
  __dirname,
  '..',
  'node_modules',
  '.bin',
  'prisma',
);

const databaseFile = join(
    __dirname,
    '..',
    'prisma',
    process.env.DATABASE_URL!.substring("file:./".length)
);

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let i = 0;

  beforeEach(async () => {
    writeFileSync(databaseFile, "");
    renameSync(databaseFile, databaseFile + i);
    execSync(
      `${dotenvBinary} -e .env.test -- ${prismaBinary} db push --accept-data-loss`,
    );

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Creates a salary and retrieves it', () => {
    return request(app.getHttpServer())
      .post('/salary')
      .send({
        yearlySalary: 12000,
        name: 'Fabricio',
      })
      .expect(201)
      .expect({
        id: 1,
        name: 'Fabricio',
        yearlySalary: 12000,
        monthlySalary: 1000,
      });
  });
});
