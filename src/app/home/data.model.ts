export class DataModel{
  public id: number;
  public first_release_date: number;
  public name: string;
  public rating: number;
  public summary: string;

  constructor(id: number, first_release_date: number, name: string, rating: number, summary: string){
    this.id = id;
    this.first_release_date = first_release_date;
    this.name = name;
    this.rating = rating;
    this.summary = summary;

  }

}
