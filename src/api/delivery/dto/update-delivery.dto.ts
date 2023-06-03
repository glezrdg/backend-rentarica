import { PartialType } from '@nestjs/swagger';
import { CreateDeliveryDto, CreateAgentDto } from './create-delivery.dto';

export class UpdateDeliveryDto extends PartialType(CreateDeliveryDto) { }
export class UpdateAgentDto extends PartialType(CreateAgentDto) { }
