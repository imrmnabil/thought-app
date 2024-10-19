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
  HeartIcon,
} from "react-native-heroicons/outline";

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
  console.log(post?.image_url);
  return (
    <Card mode="elevated" style={{ padding: 0 }} contentStyle={{ padding: 0 }}>
      <View className="flex-row w-full px-3 py-4 space-x-2">
        <LeftContent image={profile?.avatar_url} />
        <View>
          <Text className="font-semibold text-base">{profile?.full_name}</Text>
          <Text>{`@${profile?.username}`}</Text>
        </View>
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
            <HeartIcon size={iconStyle.size} color={theme.colors.outline} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ChatBubbleOvalLeftIcon
              size={iconStyle.size}
              color={theme.colors.outline}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <BookmarkIcon size={iconStyle.size} color={theme.colors.outline} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const iconStyle = {
  size: 30,
};

export default PostCard;
