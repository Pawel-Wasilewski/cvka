export default interface WorkExperienceData {
    company:            string
    companyLocation:    string
    companyLogo:        string | null
    companySiteUrl:     string | null
    position:           string
    startDate:          string
    endDate:            string
    responsibilities:   string[]
}