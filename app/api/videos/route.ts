import { NextResponse } from "next/server";
import Parser from "rss-parser";

// Define the type for the feed response
type VideoItem = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
};

const parser = new Parser({
  customFields: {
    item: [["media:group", "media:group"]], // Ensure media:group is parsed correctly
  },
});

export async function GET() {
  const channelId = "UCwKae8E-38Zbs7UPZwtH8xQ"; // Replace with the actual channel ID
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    // Fetch the RSS feed
    const feed = await parser.parseURL(feedUrl);

    // Extract latest 5 videos with thumbnails
    const latestVideos: VideoItem[] = feed.items.slice(0, 5).map((item) => {
      const mediaGroup = item["media:group"];
      const thumbnailUrl = mediaGroup?.["media:thumbnail"]?.[0]?.["$"]?.["url"] || "";

      return {
        title: item.title || "No title",
        link: item.link || "#",
        pubDate: item.pubDate || "",
        thumbnail: thumbnailUrl,
      };
    });

    
    return NextResponse.json(latestVideos);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}