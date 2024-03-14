/**
 *
 */
export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {}
  disconnect(): void {}
  isConnected(): boolean {
    return false;
  }
}
