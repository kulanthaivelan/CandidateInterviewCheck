package com.kgisl.CandidateInterviewCheck.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "candidates")
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String purpose;
    private String name;
    private String email;
    private String role;
    private String source;
    private String assignedTo;
    private String status;
    private int score;
    private boolean eligibleForInterview;
    private String referral;
    private String processStatus;

    // Constructors, Getters, and Setters

    public Candidate() {
    }

    public Candidate(Long id, String purpose, String name, String email, String role, String source, String assignedTo,
            String status, int score, boolean eligibleForInterview, String referral, String processStatus) {
        this.id = id;
        this.purpose = purpose;
        this.name = name;
        this.email = email;
        this.role = role;
        this.source = source;
        this.assignedTo = assignedTo;
        this.status = status;
        this.score = score;
        this.eligibleForInterview = eligibleForInterview;
        this.referral = referral;
        this.processStatus = processStatus;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public boolean isEligibleForInterview() {
        return eligibleForInterview;
    }

    public void setEligibleForInterview(boolean eligibleForInterview) {
        this.eligibleForInterview = eligibleForInterview;
    }

    public String getReferral() {
        return referral;
    }

    public void setReferral(String referral) {
        this.referral = referral;
    }

    public String getProcessStatus() {
        return processStatus;
    }

    public void setProcessStatus(String processStatus) {
        this.processStatus = processStatus;
    }

   
}
