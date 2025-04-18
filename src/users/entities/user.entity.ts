import { Account } from 'src/accounts/entities/account.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @Column()
  documents: string;

  @Column()
  birth_date: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

}
