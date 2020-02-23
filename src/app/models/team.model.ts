import { League } from './league.model';

export class Team {

  constructor(
    public id: number,
    public name: string,
    public banner: string,
    public pays: string,
    public championnat: League,
    public description: string,
    public badge: string
  ) {}
}
