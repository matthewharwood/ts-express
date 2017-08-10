import { Request, Response } from 'express';
import * as popsicle from 'popsicle';

export default class IndexController {
  public static read(req: Request, res: Response, next: Function): void {
    popsicle.get('http://api.worldbank.org/countries?format=json')
        .then((data) => {
          res.send(data.body);
        })
        .catch((err) => {
          console.log(err, 'error');
        });
  }
}
