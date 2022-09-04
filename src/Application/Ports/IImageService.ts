export interface IImageService {

  save(img: any) : string
  get(id: string): string
  delete(id: string): void

}