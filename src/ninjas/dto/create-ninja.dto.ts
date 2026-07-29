import { IsIn, MinLength } from "class-validator";

export class CreateNinjaDto {
  @MinLength(3)
  name!: string;

  @IsIn(['Sword', 'Bow', 'Nunchucks', 'Katana', 'Shuriken'])
  weapon!: 'Sword' | 'Bow' | 'Nunchucks' | 'Katana' | 'Shuriken';
}
