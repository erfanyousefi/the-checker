import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { CommentsValueSchema, DamageReportSchema, TopQuestionSchema } from "src/modules/generals/schemas/index.schema";
import { IComments, ICommentValue, IDamageReport, ITopQuestion } from "../../check-list/interface/check-list.interface";

@Schema()
class CommentsClass extends Document {
    @Prop({type: CommentsValueSchema })
    tableNotClean: ICommentValue;
    @Prop({type: CommentsValueSchema })
    sideTableNotClean: ICommentValue;
    @Prop({type: CommentsValueSchema })
    tvStandNotClean: ICommentValue;
    @Prop({type: CommentsValueSchema })
    cabinetTopAndInsideSurfacesNotClean: ICommentValue;
    @Prop({type: CommentsValueSchema })
    windowSillNotClean: ICommentValue;
    @Prop({type: CommentsValueSchema })
    BrochuresNotNeatlyAndSortedInTheirPlace: ICommentValue;
}

const CommentsSchema = SchemaFactory.createForClass(CommentsClass);

export class Shelves {
    @Prop()
    title: string;
    @Prop({ type: TopQuestionSchema })
    topQuestion: ITopQuestion;
    @Prop({ type: CommentsSchema })
    comments: IComments;
    @Prop({ type: DamageReportSchema })
    damage: IDamageReport;
    @Prop({type: Types.ObjectId, ref: "User"})
    cleaner: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "Room"})
    room: Types.ObjectId;
    @Prop({type: Types.ObjectId, ref: "User"})
    hotel: Types.ObjectId;
}
export type ShelvesDocument = Shelves & Document;
export const ShelvesSchema = SchemaFactory.createForClass(Shelves)
