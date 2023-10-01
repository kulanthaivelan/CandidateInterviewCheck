package com.kgisl.CandidateInterviewCheck.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kgisl.CandidateInterviewCheck.entity.Candidate;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    // Additional custom queries can be defined here if needed
}
