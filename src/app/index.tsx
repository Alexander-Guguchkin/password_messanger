'use client'
import Button from '@mui/material/Button';
import List from '@/components/ui/List'
export default function Home() {
  return (
    <div>
      <List />
      <Button variant="contained" disableElevation >
        Добавить
      </Button>
    </div>
  );
}
