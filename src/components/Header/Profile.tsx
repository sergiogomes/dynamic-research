import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && <Box marginRight="4" textAlign="right">
        <Text>Usuário Admin</Text>
        <Text color="gray.300" fontSize="small">
          usuario@admin.com
        </Text>
      </Box>}

      <Avatar
        showBorder
        borderColor="pink.400"
        size="md"
        name="Usuário Admin"
        // src="https://avatars.githubusercontent.com/u/49077388?s=400&u=ec9520ac11646eea256440b5db57ede4af4bf6be&v=4"
      />
    </Flex>
  );
}