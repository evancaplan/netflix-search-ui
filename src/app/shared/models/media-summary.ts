export class MediaSummary {
  avgrating: number;
  clist: string;
  id: number;
  imdbid: string;
  imdbrating: number;
  img: string;
  nfid: number;
  poster: string;
  runtime: number;
  synopsis: string;
  title: string;
  titledate: string;
  top250: number;
  top250tv: number;
  vtype: string;
  year: number;

  constructor(data: {
    avgrating: number,
    clist: string,
    id: number,
    imdbid: string,
    imdbrating: number,
    img: string,
    nfid: number,
    poster: string,
    runtime: number,
    synopsis: string,
    title: string,
    titledate: string,
    top250: number,
    top250tv: number,
    vtype: string,
    year: number
  }) {
    this.avgrating = data.avgrating;
    this.clist = data.clist;
    this.id = data.id;
    this.imdbid = data.imdbid;
    this.imdbrating = data.imdbrating;
    this.img = data.img;
    this.nfid = data.nfid;
    this.poster = data.poster;
    this.runtime = data.runtime;
    this.synopsis = data.synopsis;
    this.title = data.title;
    this.titledate = data.titledate;
    this.top250 = data.top250;
    this.top250tv = data.top250tv;
    this.vtype = data.vtype;
    this.year = data.year;
  }
}
