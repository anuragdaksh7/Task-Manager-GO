import { z } from 'zod';

const createTaskSchema = z.object({
    title: z.string().trim().min(1, 'Title is required').max(255, 'Title is too long'),
    dueDate: z.date(), // Required field
    description: z.string().trim().min(1, 'Description is required').max(100, 'Description is too long'), // 2 line length
    priority: z.enum(['High', 'Medium', 'Low']).optional(), // Optional field
    category: z.string().trim().min(1, 'Category is required'),
    dependencies: z.string().trim().optional(), // Optional field
    labels: z.string().trim(), // Array of strings for labels
});

export default createTaskSchema;