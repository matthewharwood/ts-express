import { Request, Response } from 'express';

export class IndexController {
  public static read(req: Request, res: Response, next: Function): void {
    res.send('Get a random book');
  }
}
