export interface City {
  guid: string;
  isActive: boolean;
  address: string;
  latitude: number;
  longitude: number;
  tags?: Array<string | Tag>;
}

export type Tag =
  | 'ad'
  | 'adipisicing'
  | 'aliqua'
  | 'aliquip'
  | 'amet'
  | 'anim'
  | 'aute'
  | 'cillum'
  | 'commodo'
  | 'consectetur'
  | 'consequat'
  | 'culpa'
  | 'cupidatat'
  | 'deserunt'
  | 'do'
  | 'dolor'
  | 'dolore'
  | 'duis'
  | 'ea'
  | 'eiusmod'
  | 'elit'
  | 'enim'
  | 'esse'
  | 'est'
  | 'et'
  | 'eu'
  | 'ex'
  | 'excepteur'
  | 'excepteurus'
  | 'exercitation'
  | 'fugiat'
  | 'id'
  | 'in'
  | 'incididunt'
  | 'ipsum'
  | 'irure'
  | 'labore'
  | 'laboris'
  | 'laborum'
  | 'Lorem'
  | 'magna'
  | 'minim'
  | 'mollit'
  | 'nisi'
  | 'non'
  | 'nostrud'
  | 'nulla'
  | 'occaecat'
  | 'officia'
  | 'pariatur'
  | 'proident'
  | 'qui'
  | 'quis'
  | 'reprehenderit'
  | 'sint'
  | 'sit'
  | 'sunt'
  | 'tempor'
  | 'ullamco'
  | 'ut'
  | 'velit'
  | 'veniam'
  | 'voluptate';
