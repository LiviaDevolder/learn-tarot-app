export enum Type {
  guest,
  logged,
  none
}

export interface IHeader {
  type: Type
}
