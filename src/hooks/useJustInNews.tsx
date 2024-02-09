import { useEffect,useState } from "react"
import { JustInNews } from "../utility"

export interface NewsData {
  article_id: number;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: null;
  description: string | null;
  content: string | null;
  pubDate:string | null;
  full_description: string | null;
  image_url: string | null;
  source_id: string | null;
  country: string[] | null;
  category: string[] | null;
  language: string | null;
}

export type Updater = (data: NewsData[]) => void;

export const useJustInNews = () => {

  const [data,setData] = useState<NewsData[]>([])
  
  useEffect(() => {JustInNews(setData)},[])
  return {data}
}
