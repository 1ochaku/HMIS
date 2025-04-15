import express from 'express';
import { addRatingAndReview,calculateOverallRating, calculateDepartmentRating,getAllFeedbacks,
    getMedicineInventoryTrends,getMedicinePrescriptionTrends,addMedicine,addInventoryLog,createPrescription,createBill,addItemToBill,
    addPrescriptionEntry,getBedOccupancyTrends, getFacilityStatistics,getDoctorRatingDistribution,
    getAllConsultations ,getFeedbacksByRating ,getDoctorQuadrantData, getDepartmentQuadrantData,
    getAllDoctorsData, getDashboardKPIs} from '../controllers/analytics.controller.js';

const router = express.Router();

// Route to add rating and review
router.post('/feedback/add/:consultationId', addRatingAndReview);
// Route to get department-wise rating
router.get('/feedback/department-rating/:departmentId', calculateDepartmentRating);
// Route to get all feedbacks
router.get('/feedback/all', getAllConsultations);
// Route to get overall rating
router.get('/feedback/overall',calculateOverallRating);
router.get('/feedback/doctor',getDoctorRatingDistribution);
router.get('/feedbacks/rating/:rating',getFeedbacksByRating);

router.post('/medicine-add', addMedicine);
router.post('/medicineinventory-add', addInventoryLog);
router.post('/prescription-add', createPrescription);
router.post('/prescription/additem', addPrescriptionEntry);
router.post('/bill/create', createBill);
router.post('/bill/additem/:billId',addItemToBill);
// Route to get medicine trends
router.get('/medicine-trends',getMedicineInventoryTrends);
// Route to get medicine prescription trends
router.get('/medicine-prescription-trends',getMedicinePrescriptionTrends);

// Route to get occupied bed trends
router.get('/occupied-beds/:period', getBedOccupancyTrends);
// Route to get facility statistics
router.get('/facility-stats', getFacilityStatistics);

router.get('/doc-performance', getDoctorQuadrantData);
router.get('/dept-performance',getDepartmentQuadrantData);
router.get('/doctors/all',getAllDoctorsData);

//router to get the metrics for the dashboard
router.get('/dashboard/kpis', getDashboardKPIs);
export default router;
