import { Center, Heading } from "native-base";

type Props = {
  title: string;
}

export function ScreenHeader({ title, ...rest }: Props) {
  return (
    <Center
      bg="gray.600"
      pb={6}
      pt={16}
      {...rest}
    >
      <Heading color="gray.100" fontSize="xl" fontFamily="heading">
        {title}
      </Heading>
    </Center>
  )
}