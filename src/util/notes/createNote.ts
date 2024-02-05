import { Note } from '@/hooks/notes'
import { v4 as uuid } from 'uuid'

const content = `Write your notes here.....`

export const createNote = (folder_id: string) => {
  return {
    folder_id,
    content,
    note_id: uuid(),
    title: 'New Note',
    created_at: new Date().toISOString(),
    isArchived: false,
    isFavorite: false,
    isTrashed: false
  } as Note
}
