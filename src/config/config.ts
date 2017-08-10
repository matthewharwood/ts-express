import { sync } from 'glob';
import { union } from 'Ramda';


/**
 * Will parse a directory and make a union array of strings.
 */
export default class Config {
  public static port = 3000;
  public static routes = './dist/routes/**/*.js';
  public static models = './dist/models/**/*.js';

  public static globFiles(location: string): string[] {
    return union([], sync(location));
  }
}
