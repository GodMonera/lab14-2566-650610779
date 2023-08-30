"use client";
import {
  Container,
  Rating,
  Text,
  Title,
  Textarea,
  Button,
  Group,
  Divider,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg" />
      <Textarea
        mt="xs"
        placeholder="Do you enjoy eating?"
        label="Your review"
        minRows={3}
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>
      <Text align="center" order={2} c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly />
      </Group>
      <Text align="center" order={2} c="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination position="center" mt="md" total={20} color="orange" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Borwonpak Duangjun 650610779
      </Text>
    </Container>
  );
}
