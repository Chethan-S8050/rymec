import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    department: { type: String, required: true },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    schedule: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Course', CourseSchema);
