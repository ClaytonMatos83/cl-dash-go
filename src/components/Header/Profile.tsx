import { Avatar, Flex, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps ) {
    return (
        <Flex align="center">
          { showProfileData && (
              <Box mr="4" textAlign="right">
                 <Text>Clayton Matos</Text>
                 <Text color="gray.300" fontSize="small">
                  clayton_matos@outlook.com.br
                 </Text>
              </Box>   
          )}

          <Avatar size="md" name="Clayton Matos"/>
        </Flex>
    );
}
