export const getWeeklyDay = (day: number) => {
  if (day == 0) return 'domingo'
  if (day == 1) return 'lunes'
  if (day == 2) return 'martes'
  if (day == 3) return 'miercoles'
  if (day == 4) return 'jueves'
  if (day == 5) return 'viernes'
  if (day == 6) return 'sabado'
  return 'lunes'
}