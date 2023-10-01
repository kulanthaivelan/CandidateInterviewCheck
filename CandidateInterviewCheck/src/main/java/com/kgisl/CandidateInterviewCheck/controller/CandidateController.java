package com.kgisl.CandidateInterviewCheck.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kgisl.CandidateInterviewCheck.entity.Candidate;
import com.kgisl.CandidateInterviewCheck.exception.CandidateNotFoundException;
import com.kgisl.CandidateInterviewCheck.repository.CandidateRepository;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/candidates")
public class CandidateController {

    @Autowired
    private CandidateRepository candidateRepository;

    @GetMapping("/")
    public List<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }

    @GetMapping("/{id}")
    public Candidate getCandidateById(@PathVariable Long id) {
        return candidateRepository.findById(id)
                .orElseThrow(() -> new CandidateNotFoundException(id));
    }

    @PostMapping("/create")
    public Candidate addCandidate(@RequestBody Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    @PutMapping("update/{id}")
    public Candidate updateCandidate(@PathVariable Long id, @RequestBody Candidate updatedCandidate) {
        return candidateRepository.findById(id)
                .map(candidate -> {
                    candidate.setPurpose(updatedCandidate.getPurpose());
                    candidate.setName(updatedCandidate.getName());
                    candidate.setEmail(updatedCandidate.getEmail());
                    candidate.setRole(updatedCandidate.getRole());
                    candidate.setSource(updatedCandidate.getSource());
                    candidate.setAssignedTo(updatedCandidate.getAssignedTo());
                    candidate.setStatus(updatedCandidate.getStatus());
                    candidate.setScore(updatedCandidate.getScore());
                    candidate.setEligibleForInterview(updatedCandidate.isEligibleForInterview());
                    candidate.setReferral(updatedCandidate.getReferral());
                    candidate.setProcessStatus(updatedCandidate.getProcessStatus());
                    return candidateRepository.save(candidate);
                })
                .orElseThrow(() -> new CandidateNotFoundException(id));
    }

    @DeleteMapping("delete/{id}")
    public void deleteCandidate(@PathVariable Long id) {
        candidateRepository.deleteById(id);
    }
}

