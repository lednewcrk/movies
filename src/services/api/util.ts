import {API_IMAGE_BASE} from '@env';

export function getPostUri(path: string) {
  return `${API_IMAGE_BASE}t/p/original${path}`;
}
