import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn  } from 'typeorm';
import User from './User';

@Entity('Posts')
class Post {
    @PrimaryGeneratedColumn('increment')
    posts_id: number;

    @Column('varchar', { length: 100, nullable: false })
    title: string;
    
    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id"})
    category: User;

    @CreateDateColumn()
	date: string;

    @Column('varchar', { length: 12000, nullable: false })
    milagres: string;
}

export default Post;