export const px2vw = (size: number, width = 1440) => `${(size / width) * 100}vw`;

export const getChartData = (tasksCompleted: number, totalTasks: number) => {
  const remainingTask = totalTasks - tasksCompleted;
  return [
    {
      count: tasksCompleted,
      color: 'green',
      showText: true,
    },
    {
      count: remainingTask,
      color: null,
      showText: false,
    },
  ]
}