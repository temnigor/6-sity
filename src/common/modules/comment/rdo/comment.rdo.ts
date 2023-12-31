import 'reflect-metadata';
import { Expose, Type } from 'class-transformer';
import UserRDO from '../../user/rdo/user.rdo.js';

export class CommentRDO {
    @Expose()
    public id!: string;

    @Expose()
    public description!: string;

    @Expose()
    public rating!: number;

    @Expose({ name: 'userId' })
    @Type(() => UserRDO)
    public user!: UserRDO;
}
