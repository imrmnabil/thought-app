import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Card, IconButton, useTheme } from "react-native-paper";
import { Post } from "@/app/(tabs)/home";
import { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisVerticalIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
import { formatDistanceToNow } from "date-fns";

interface Props {
  post: Post;
}

const LeftContent = ({ image }: any) => (
  <Avatar.Image source={{ uri: image }} size={50} />
);

const PostCard = ({ post }: Props) => {
  const theme = useTheme();
  const profile = post?.profiles;
  const [imageRatio, setImageRatio] = useState(0);
  useEffect(() => {
    if (post?.image_url) {
      Image.getSize(post.image_url, (width, height) => {
        const ratio = width / height;
        setImageRatio(ratio);
      });
    }
  }, [post?.image_url]);

  let timeAgo;
  if (post?.created_at) {
    timeAgo = formatDistanceToNow(new Date(post?.created_at), {
      addSuffix: true,
    });
  }
  return (
    <Card mode="elevated" style={{ backgroundColor:theme.colors.background }} contentStyle={{ padding: 0 }}>
      <View className="flex-row justify-between w-full px-3 py-4">
        <View className="flex-row flex-1 space-x-2">
          <LeftContent image={profile?.avatar_url} />
          <View>
            <Text className="font-semibold text-lg">
              {profile?.full_name}
            </Text>
            {/* <Text>{`@${profile?.username}`}</Text> */}
            <Text className="text-xs">{timeAgo}</Text>
          </View>
        </View>
        <EllipsisVerticalIcon
              size={iconStyle.size}
              color={theme.colors.onBackground}
            />
      </View>
      <View className="px-4 pb-4">
        <Text className="text-base">{post?.body}</Text>
      </View>
      <View
        className="mx-4  flex-1 rounded-md overflow-hidden"
        id="imageContainer"
      >
        {post?.image_url && (
          <Image
            className="w-full"
            resizeMode="cover"
            style={{ height: null, aspectRatio: imageRatio }}
            source={{ uri: post?.image_url }}
          />
        )}
      </View>
      <View
        className=" mb-4 mx-4 mt-2 flex-1 flex-row items-start justify-between space-x-2"
        id="imageContainer"
      >
        <View className="flex-row space-x-2">
          <TouchableOpacity>
            <HeartIcon size={iconStyle.size} color={theme.colors.onBackground} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ChatBubbleOvalLeftIcon
              size={iconStyle.size}
              color={theme.colors.onBackground}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <BookmarkIcon size={iconStyle.size} color={theme.colors.onBackground} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const iconStyle = {
  size: 30,
};

export default PostCard;
