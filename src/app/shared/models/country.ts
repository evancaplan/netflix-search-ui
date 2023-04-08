export class Country {
  Id: number;
  Name: string;
  Code: string;

  constructor(data: {
    Id: number;
    Name: string;
    Code: string;
  }) {
    this.Id = data.Id;
    this.Name = data.Name;
    this.Code = data.Code
  }
}
