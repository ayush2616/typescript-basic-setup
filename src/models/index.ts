import { createConnection } from 'typeorm';

const entities: any[] = [];
export async function setupEntities(config: any) {
  return createConnection({
    entities,
    type: 'postgres',
    ...config,
    synchronize: true,
    logging: false,
  });
}

// export * from '';
