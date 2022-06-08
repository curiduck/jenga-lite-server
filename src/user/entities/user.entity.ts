import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  name: string;

}
