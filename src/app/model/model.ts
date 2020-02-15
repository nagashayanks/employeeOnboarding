
export interface CurrentUser {
    userId: number;
    userName: string;
}

export interface DoctorSummary {
    doctorName: string;
    rating: number;
   specialization: string;
   consultationFees: number;
}
export interface BookedslotAppointments {

    hospitalName: string;
    date: string;
    slotTime: string;
    patientId: number;
    patientName: string;
    email: string;
    mobile: number;

 }
