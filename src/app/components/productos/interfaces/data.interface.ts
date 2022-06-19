export interface Data {
  hits: Hits[];
  nbHits?: number;
  page?: number;
  nbPages: number;
  hitsPerPage?: number;
  exhaustiveNbHits?: boolean;
  exhaustiveTypo?: boolean;
  query: string;
  params?: string;
  processingTimeMS?: number;
}

export interface Hits {
  comment_text?: string;
  created_at_i?: number;
  num_comments?: number;
  objectID?: string;
  parent_id?: number;
  points?: number;
  story_id?: number;
  title?: string;
  url?: string;
  id: number;
  src: string;
  author: string;
  created_at: string;
  story_text: string;
  story_title: string;
  story_url: string;
}

export interface Filter {
  query: string;
  page: number;
}
