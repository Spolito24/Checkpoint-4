<?php

namespace App\Twig\Components;

use App\Entity\TodoList;
use App\Repository\TaskRepository;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent()]
final class TodoCardComponent
{
    public TodoList $todo_list;
    public int $taskCompleted;
    public TaskRepository $taskRepository;

    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function getTaskCompleted()
    {
        $this->taskCompleted = $this->taskRepository->getTotalCompletedTask($this->todo_list->getId());
        return $this->taskCompleted;
    }
}
