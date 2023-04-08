export class MediaDetails {
  matlevel: null | string;
  imdblanguage: string;
  imdbposter: string;
  year: number;
  imdbrating: number;
  vtype: string;
  lgimg: null | string;
  img: string;
  title: string;
  imdbid: string;
  imdbawards: string;
  curdate: string;
  avgrating: number;
  nfdate: string;
  imdbruntime: string;
  imdblocalimage: null | string;
  matlabel: string;
  netflixruntime: number;
  imdbcountry: string;
  predrating: null | string;
  imdbmetascore: string;
  imdbrated: string;
  imdbgenre: string;
  nfid: number;
  synopsis: string;
  nfId: number;
  imdbplot: string;
  imdbvotes: number;

  constructor(data: {
    matlevel: null | string,
    imdblanguage: string,
    imdbposter: string,
    year: number,
    imdbrating: number,
    vtype: string,
    lgimg: null | string,
    img: string,
    title: string,
    imdbid: string,
    imdbawards: string,
    curdate: string,
    avgrating: number,
    nfdate: string,
    imdbruntime: string,
    imdblocalimage: null | string,
    matlabel: string,
    netflixruntime: number,
    imdbcountry: string,
    predrating: null | string,
    imdbmetascore: string,
    imdbrated: string,
    imdbgenre: string,
    nfid: number,
    synopsis: string,
    netflixid: number,
    imdbplot: string,
    imdbvotes: number
  }) {
    this.matlevel = data.matlevel;
    this.imdblanguage = data.imdblanguage;
    this.imdbposter = data.imdbposter;
    this.year = data.year;
    this.imdbrating = data.imdbrating;
    this.vtype = data.vtype;
    this.lgimg = data.lgimg;
    this.img = data.img;
    this.title = data.title;
    this.imdbid = data.imdbid;
    this.imdbawards = data.imdbawards;
    this.curdate = data.curdate;
    this.avgrating = data.avgrating;
    this.nfdate = data.nfdate;
    this.imdbruntime = data.imdbruntime;
    this.imdblocalimage = data.imdblocalimage;
    this.matlabel = data.matlabel;
    this.netflixruntime = data.netflixruntime;
    this.imdbcountry = data.imdbcountry;
    this.predrating = data.predrating;
    this.imdbmetascore = data.imdbmetascore;
    this.imdbrated = data.imdbrated;
    this.imdbgenre = data.imdbgenre;
    this.nfid = data.nfid;
    this.synopsis = data.synopsis;
    this.nfId = data.netflixid;
    this.imdbplot = data.imdbplot;
    this.imdbvotes = data.imdbvotes;
  }
}
