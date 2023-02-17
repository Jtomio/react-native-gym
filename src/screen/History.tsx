import { useState } from 'react'
import { SectionList, Heading, VStack, Text } from "native-base"

import { ScreenHeader } from "@components/ScreenHeader"
import { HistoryCard } from "@components/HistoryCard"


export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "10.02.2023",
      data: ["Puxada frontal", "Remada unilateral"]
    },
    {
      title: "11.02.2023",
      data: ["Puxada frontal"]
    },
  ])


  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3} fontFamily="heading">
            {section.title}
          </Heading>
        )}
        px={6}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda.{'\n'}
            Bora malhar?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />



    </VStack>
  )
}